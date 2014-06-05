package task 

import (
  "fmt"
  "github.com/codegangsta/cli"
  "github.com/qSlide/qslide/modules/maillist"
)

var CmdEmail = cli.Command{
      Name: "mail",
      Usage: "Marketing email",
      Action: func(c * cli.Context) {
        Market()
      },
    }

type Email struct {
  Name string
  Subject string
}

func Market() {
  fmt.Println("Start to send email")
  
}

// Creates a new cli Application with some reasonable defaults for Name, Usage, Version and Action.
//func NewApp() *Email {
  //return &Email{
    //Name: os.Args[0],
    //Usage: "A new cli application",
    //Version: "0.0.0",
    //BashComplete: DefaultAppComplete,
    //Action: helpCommand.Action,
    //Compiled: compileTime(),
    //Author: "Author",
    //Email: "unknown@email",
  //}
//}

