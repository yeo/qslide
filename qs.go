package main

import (
  "os"
  "github.com/codegangsta/cli"
  "github.com/qSlide/qslide/task"
  //"./task"
)

const (
  APP_VER  = "0.1.0"
  APP_NAME = "qs"
)

func main() {

  var app      = cli.NewApp()
  app.Name     = APP_NAME
  app.Version  = APP_VER
  app.Usage    = "email for mail sending, or web or none for run web interface!"
  app.Commands = []cli.Command{
    task.CmdWeb,
    task.CmdEmail,
  }
	app.Flags = append(app.Flags, []cli.Flag{}...)

  app.Run(os.Args)
}
