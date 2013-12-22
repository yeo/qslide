package main

import (
  "net/http"
  "github.com/codegangsta/martini"
  "github.com/codegangsta/martini-contrib/render"
)

func main() {

    server := martini.Classic()
    http.ListenAndServe(":1005", server)    
    server.Get("/", func() string {

        return "<h1>Hello, world!</h1>"

    })

    server.Run()

}

