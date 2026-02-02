const express = require('express')
const app = express()
const characters = 
[
  {"name": "Tow Mater", "imageURL": "", "films": [1, 2, 3]},
  {"name": "Cruz Ramirez the hero", "imageURL": "cruz.png", "films": [3]}
]

app.use(express.static('client'));

app.get('/', function(req, resp){
  console.log('requested home page')
  resp.send('Hello from Radiator Springs')
})

app.get('/character/detail/:num', function(req,resp){
    console.log("getting an individual character")

    let num = parseInt(req.params.num)
    let char = characters[num]
    resp.send(char)
})


app.get('/character/list', function(req,resp){
  console.log('getting all cars characters')
  console.log(characters)
  resp.send(characters)
})

app.get('/character/search', function(req,resp){
  console.log("seraching for lambs")
  let search_term = req.query.search_term
  let results = characters.filter(item => item.name.toLowerCase().includes(search_term.toLowerCase()))
  resp.send(results)
})

app.get('/random/:max', function(req, resp){
  let max = parseInt(req.params.max)
  let rand = Math.floor(Math.random()*max) +1
  console.log('Max via url is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

app.get('/r', function(req, resp){
  max = parseInt(req.query.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via query is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})


app.listen(8090)

console.log("Server at http://127.0.0.1:8090")