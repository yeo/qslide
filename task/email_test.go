package task 

import (
  "fmt"
  "github.com/codegangsta/cli"
  //"github.com/qSlide/qslide/modules/maillist"
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


