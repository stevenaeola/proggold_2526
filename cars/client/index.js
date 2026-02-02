let search_button = document.getElementById('search_submit');

search_button.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8090/character/search?search_term=a')
    .then(response => response.text())
    .then(body =>
      document.getElementById('search_results').innerHTML=body)

})

window.addEventListener("DOMContentLoaded", async function(event){
  let response = await fetch('http://127.0.0.1:8090/character/list')
  let carlist = await response.text()
  console.log(carlist)
  for(let car of carlist){
    console.log(car.name)
  }

})