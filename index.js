const { c_to_f, 
        f_to_c, 
        c_to_k, 
        k_to_c} = require('./Operations')

console.log(c_to_f(12))
console.log(f_to_c(0))

console.log(c_to_k(15))
console.log(k_to_c(4))

const http = require('http')
const url = require('url')

const app = http.createServer((req,res) => {
  const obj = url.parse(req.url, true).query
  switch(url.parse(req.url).pathname) {
    case '/':
      res.end('welcome to temp conversion')
      break
    case '/c_to_f':
      if (!obj.temp) {
        res.end('Here you can convert from Celsius to Fahrenheit')
      } else {
        res.end(String(c_to_f((obj.temp))) + ' Fahrenheit')
      }
      break
    case '/f_to_c':
      if (!obj.temp) {
        res.end('Here you can convert from Fahrenheit to Celsius')
      } else {
        res.end(String(f_to_c((obj.temp))) + ' Celsius')
      }
      break
    case '/c_to_k':
      if (!obj.temp) {
        res.end('Here you can convert from Celsius to Kelvin')
      } else {
        res.end(String(c_to_k((obj.temp))) + ' Kelvin')
      }
    case '/k_to_c':
        if (!obj.temp) {
            res.end('here you can convert from Kelvin to Celsius')
          } else {
            res.end(String(k_to_c((obj.temp))) + ' Celsius')
          }
      break
    default:
      res.end('wrong url')
  }
})

app.listen(3000)
