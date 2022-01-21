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
  console.log(obj)
  switch(req.url) {
    case '/':
      res.end('welcome to temp conversion')
      break
    case '/c_to_f':
      res.end('here you can convert from celsius to fahrenheit')
      break
    case '/f_to_c':
      res.end('here you can convert from fahrenheit to celsius')
      break
    case '/c_to_k':
      res.end('here you can convert from celsius to kelvin')
      break
    case '/k_to_c':
      res.end('here you can convert from kelvin to celsius')
      break
    default:
      res.end('wrong url')
  }
})

app.listen(3000)