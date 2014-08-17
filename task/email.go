package task 

import (
  "fmt"
  "github.com/codegangsta/cli"
  //"github.com/qSlide/qslide/modules/maillist"
  "github.com/mostafah/mandrill"
  "log"
  "github.com/qSlide/qslide/modules/app"
)

var config *app.Configuration

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

func Init() {
  config = app.LoadConfiguration()

  mandrill.Key = config.MandrillKey
  // you can test your API key with Ping
  err := mandrill.Ping()
  // everything is OK if err is nil
  if nil != err {
    log.Println("Cannot ping")
  }
}

func Market() {
  fmt.Println("Start to send email")
  Init()
  Send()
}

func Send() {
  msg := mandrill.NewMessageTo("kurei@axcoto.com", "Vinh Nguyen Test")
  msg.HTML = "HTML content<a href=\"sasas\">sasa</a>a  sasa"
  msg.Text = "plain text content" // optional
  msg.Subject = "Test"
  msg.FromEmail = "kureikain@gmail.com"
  msg.FromName = "Vinh Nguyen"
  res, err := msg.Send(false)
  if nil != err {
    log.Println("Fail to send email")
  }

  log.Println("Mail status: " + res[0].Status)
}
