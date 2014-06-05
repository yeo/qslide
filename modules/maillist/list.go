package maillist

import (
  r "github.com/dancannon/gorethink"
)

var (
  session *r.Session
)

type account {
  Email string
  FirstName string
  LastName string
  FullName string
}

func connect() {
  session, err := r.Connect(r.ConnectOpts{
      Address:  "localhost:28015",
      Database: "q",
  })
}

if err != nil {
    log.Fatalln(err.Error())
}

func New() {
  connect()
}

func Fetch() {
}

func GetAll() {
}
