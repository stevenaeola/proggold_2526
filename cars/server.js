const express = require('express')
const app = express()
const characters = ["Tow Mater",
  "Julia"
]

app.get('/', function(req, resp){
  console.log('requested home page')
  resp.send('Hello from Radiator Springs')
})

app.get('/character/:num', function(req,resp){
    let num = parseInt(req.params.num)
    let char = characters[num]
    resp.send(char)
})

app.get('/random/:max', function(req, resp){
  let max = parseInt(req.params.max)
  let rand = Math.floor(Math.random()*max) +1
  console.log('Max via url is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

app.listen(8090)

console.log("Server at http://127.0.0.1:8090")