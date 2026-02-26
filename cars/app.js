const express = require('express')
const app = express()
const characters = require("./characters.json")
const fs = require('fs');

const films = require("./films.json")


app.use(express.static('client'));

app.use(express.json());

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
  console.log("searching for lambs")
  let search_term = req.query.search_term
  if(!search_term){
    resp.status(400).send('no search term specified')
    return
  }
  let results = characters.filter(item => item.name.toLowerCase().includes(search_term.toLowerCase()))
  resp.send(results)
})


app.post("/character/new", function(req, resp){
    console.log("request body", req.body);
    let new_char = req.body;
    new_char.films = [];
    characters.push(req.body);
    console.log("New characters")
    console.log(characters)
    fs.writeFileSync('./characters.json', JSON.stringify(characters));

    resp.send(characters);
});

app.get('/film/list', function(req, resp){
  resp.send(films)
})

app.get('/film/detail/:id', function(req, resp){
  let id = req.params.id
  console.log("getting an individual film " + id)


    let film = films.find(f => f.id == id)
    resp.send(film)
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

module.exports = app;
