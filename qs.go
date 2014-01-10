package main

import (
  "fmt"
  "net/http"
  "github.com/codegangsta/martini"
  "github.com/codegangsta/martini-contrib/render"
  "os"
  "encoding/json"
)

type Configuration struct
{
  Domain string;
  Port string;
}

func loadConfiguration() *Configuration {
  file, _ := os.Open("config.json")
  decoder := json.NewDecoder(file)
  configuration := &Configuration{}
  decoder.Decode(&configuration)
  fmt.Println(configuration) 
  return configuration;
}

var config *Configuration;

func main() {
  //loadConfiguration(&config);
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

    r.HTML(200, "hello", struct{A,B string; Site Site}{ "Guesis", "bar", site })
    //return "<h1>Hello, world!</h1>"
  })

  m.Get("/download", func (r render.Render) {
  })

  m.Get("/support", func (r render.Render) {
  })

  m.Get("/tutorial", func (r render.Render) {
  })

  //m.Run()
  http.ListenAndServe(fmt.Sprintf(":%s", config.Port), m)
  //http.ListenAndServe(":10005", m)
}
