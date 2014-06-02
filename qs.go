package main

import (
  "fmt"
  "net/http"
  "github.com/codegangsta/martini"
  "github.com/codegangsta/martini-contrib/render"
  "github.com/codegangsta/martini-contrib/sessions"
  "github.com/codegangsta/cli"
  "os"
  "os/exec"
  "encoding/json"
  "github.com/sirsean/go-mailgun/mailgun"
  "math/rand"
  "log"
  "html/template"
  "github.com/qSlide/qslide/task"
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

  app := cli.NewApp()
  app.Name = "qs"
  //app.Usage = "email for mail sending, or web or none for run web interface!"
  app.Commands = []cli.Command{
    {
      Name: "web",
      ShortName: "w",
      Usage: "run web server",
      Action: func(c * cli.Context) {
        task.Web()
      },
    },
    {
      Name: "mail",
      Usage: "Marketing email",
      Action: func(c * cli.Context) {
        task.Market()
      },
    },
  }
  app.Action = func(c *cli.Context) {
    println("Hello friend!")

  }

  app.Run(os.Args)

}
