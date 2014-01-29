package main

import (
  "fmt"
  "net/http"
  "github.com/codegangsta/martini"
  "github.com/codegangsta/martini-contrib/render"
  "github.com/codegangsta/martini-contrib/sessions"
  "os"
  "os/exec"
  "encoding/json"
  "github.com/sirsean/go-mailgun/mailgun"
  "math/rand"
  "log"
  "html/template"
)
const (
  PROD = "Production"
  VERSION = "1.4.1"
)
type Configuration struct
{
  Env string;
  Domain string;
  Port string;
  MG_API_KEY string;
  MG_DOMAIN string;
  CookieSecret string;
}

func loadConfiguration() *Configuration {
  file, _ := os.Open("config.json")
  decoder := json.NewDecoder(file)
  configuration := &Configuration{}
  decoder.Decode(&configuration)
  fmt.Println(configuration) 
  return configuration;
}


func main() {
  var config *Configuration;
  config = loadConfiguration();
  fmt.Printf("%s is domain", config.Port);
  fmt.Printf("Domain: %s", config.Domain);
  m := martini.Classic()

  f := []template.FuncMap{ 
      template.FuncMap{
        "eq": func(a, b string) bool {
          return a == b
        },
      },
      template.FuncMap{
        "ne": func(a, b string) bool {
          return a != b
        },
      },
  }

  //m.Use(render.Renderer())
  m.Use(render.Renderer(render.Options{
    Directory: "templates", // Specify what path to load the templates from.
    Layout: "layout", // Specify a layout template. Layouts can call {{ yield }} to render the current template.
    Extensions: []string{".tmpl", ".html"}, // Specify extensions to load for templates.
    //Funcs: []template.FuncMap{AppHelpers}, // Specify helper function maps for templates to access.
    //Delims: render.Delims{"{[{", "}]}"}, // Sets delimiters to the specified strings.
    Charset: "UTF-8", // Sets encoding for json and html content-types.
    Funcs: f,
  }))

  store := sessions.NewCookieStore([]byte(config.CookieSecret))
  m.Use(sessions.Sessions("my_session", store))

  m.Get("/", func(r render.Render, session sessions.Session) {
    type Site struct {
      Domain string
      VisitCount  uint
      Env string
      BookmarkletURL string
    }
    BookmarkletURL := "//" + config.Domain + "/javascripts/main.js"
    if config.Env == PROD {
      BookmarkletURL = "//" + config.Domain + "/javascripts/main.js"
    }
    site := Site{config.Domain, 12, config.Env, BookmarkletURL}
    rand := rand.New(rand.NewSource(99))
    csrf := fmt.Sprintf("%f", rand.Float64()*1000000)
    session.Set("CSRF", csrf)
    var msg string; 
    if nil != session.Get("FlashMessage") {
      msg = session.Get("FlashMessage").(string)
      session.Delete("FlashMessage")
    } else {
      msg = ""
    }
    
    r.HTML(200, "hello", struct{A,B, CSRF, FlashMessage string; Site Site}{ "Guesis", "bar", csrf, msg, site })
    //return "<h1>Hello, world!</h1>"
  })

  m.Get("/qslider/download", func (r render.Render, session sessions.Session) {

  })

  m.Post("/qslider/support", func (res http.ResponseWriter, req *http.Request, params martini.Params, session sessions.Session) {
    var config *Configuration
    config = loadConfiguration()
    mg_client := mailgun.NewClient(config.MG_API_KEY, config.MG_DOMAIN)

    req.ParseForm()
    p := req.Form
    log.Println(req.Form)
    if session.Get("CSRF") == p["csrf"][0] {
      message1 := mailgun.Message{
        FromName: "QSlider",
        FromAddress: "qslide@mg.axcoto.com",
        ToAddress: "kureikain@gmail.com",
        Subject: "Ticket on qslide.axcoto.com",
        Body: "Contact from: " + p["youremail"][0] + " with content: \n<br />" + p["content"][0],
      }
      
      fmt.Println("Attempting to send to ", mg_client.Endpoint(message1))

      body, err := mg_client.Send(message1)
      if err != nil {
        fmt.Println("Got an error:", err)
      } else {
        fmt.Println(body)
        session.Set("FlashMessage", "Message sent")
        http.Redirect(res, req, "/", 302) 
        //http.Redirect(res, req, "http://slide.dev", http.StatusTemporaryRedirect) 
      }
    }
  })

  m.Get("/qslider/tutorial", func (r render.Render) {
  })

  //m.Run()
  cmd := exec.Command("pwd","> /tmp/101")
  //cmd := exec.Command("", "5")
  err := cmd.Start()
  if err != nil {
    log.Fatal(err)
  }
  log.Printf("Waiting for command to finish...")
  err = cmd.Wait()
  http.ListenAndServe(fmt.Sprintf(":%s", config.Port), m)
  //http.ListenAndServe(":10005", m)
}
