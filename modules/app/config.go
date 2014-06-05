package app

import (
  "os"
  "encoding/json"
  "fmt"
)
const (
  PROD = "Production"
  VERSION = "1.4.1"
)

type Configuration struct
{
  Env            string
  Domain         string
  Port           string
  MG_API_KEY     string
  MG_DOMAIN      string
  CookieSecret   string
  MandrillKey     string
}

func LoadConfiguration() *Configuration {
  file, _ := os.Open("config.json")
  decoder := json.NewDecoder(file)
  configuration := &Configuration{}
  decoder.Decode(&configuration)
  fmt.Println(configuration) 
  return configuration;
}
