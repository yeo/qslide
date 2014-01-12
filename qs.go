package main

import (
  "fmt"
  "net/http"
  "github.com/codegangsta/martini"
  "github.com/codegangsta/martini-contrib/render"
  "os"
  "encoding/json"
  "github.com/sirsean/go-mailgun/mailgun"
  "math/rand"
  "log"
)

type Configuration struct
{
  Domain string;
  Port string;
  MG_API_KEY string;
  MG_DOMAIN string;
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
  //m.Use(render.Renderer())
  m.Use(render.Renderer(render.Options{
    Directory: "templates", // Specify what path to load the templates from.
    Layout: "layout", // Specify a layout template. Layouts can call {{ yield }} to render the current template.
    Extensions: []string{".tmpl", ".html"}, // Specify extensions to load for templates.
    //Funcs: []template.FuncMap{AppHelpers}, // Specify helper function maps for templates to access.
    //Delims: render.Delims{"{[{", "}]}"}, // Sets delimiters to the specified strings.
    Charset: "UTF-8", // Sets encoding for json and html content-types.
  }))

  m.Get("/", func(r render.Render) {
    type Site struct {
      Domain string
      VisitCount  uint
    }
    site := Site{config.Domain, 12}
    rand := rand.New(rand.NewSource(99))
    
    r.HTML(200, "hello", struct{A,B, CSRF string; Site Site}{ "Guesis", "bar", fmt.Sprintf("%f", rand.Float64()*1000000), site })
    //return "<h1>Hello, world!</h1>"
  })

  m.Get("/download", func (r render.Render) {
  })

  m.Post("/support", func (res http.ResponseWriter, req *http.Request, params martini.Params) {
    var config *Configuration
    config = loadConfiguration()
    mg_client := mailgun.NewClient(config.MG_API_KEY, config.MG_DOMAIN)

    req.ParseForm()
    p := req.Form
    log.Println(req.Form)
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
      http.Redirect(res, req, "http://slide.dev", http.StatusTemporaryRedirect) 
    }
  })

  m.Get("/tutorial", func (r render.Render) {
  })

  //m.Run()
  http.ListenAndServe(fmt.Sprintf(":%s", config.Port), m)
  //http.ListenAndServe(":10005", m)
}
