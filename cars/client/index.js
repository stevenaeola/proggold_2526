

function displayCars(carList){
  console.log(carList)
  let row1 = document.getElementById('row1')
  row1.innerHTML= ""
  for(let car of JSON.parse(carList)){
    console.log(car.name)
    let films = car.films
    let film
    if(films.length >0){
      filmText = "Appears in Cars franchise "
    
      for(let film of films){
         filmText+= `<div id='${film}'>${film}</div>`
      }
    }
    else{
      filmText = "[not sure which films - mussing data]"
    }

    let carString=`
        <div class="col">
            <div class="card shadow-sm">
                <img src="${car.imageURL}">

                <div class="card-body">
                  <h5 class="card-title">${car.name}</h5>
                  <p class="card-text">${filmText} </p>
                </div>
              </div>
          </div>`
    row1.innerHTML+=carString
  }
}

window.addEventListener("DOMContentLoaded", async function(event){
  let response = await fetch('http://127.0.0.1:8090/character/list')
  let carlist = await response.text()
  displayCars(carlist)
})

const search_form = document.getElementById("search_form")

search_form.addEventListener("input", async function(event){
 // alert ("input on form")
  const search_box = document.getElementById('search_term')
  let search_term = search_box.value
 // alert("search for" + search_term)
  let response = await fetch(`http://127.0.0.1:8090/character/search?search_term=${search_term}`)
  let carlist = await response.text()
  displayCars(carlist)
// http://127.0.0.1:8090/character/search"
})


search_form.addEventListener('submit', function(event) {
  event.preventDefault();
})

const new_char_form = document.getElementById('new_char_form');
new_char_form.addEventListener('submit', async function(event){
    event.preventDefault();
    const formData = new FormData(new_char_form);
    console.log(formData);
    console.log(Object.fromEntries(formData.entries()));
    const formJSON = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log("Form data", formData);
    const response = await fetch('/character/new',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: formJSON
    });
    if(response.ok){
        const responseBody = await response.text();
        console.log("response from POST: ", responseBody)
    }
    else{
        alert('Problem with POST request ' + response.statusText);
    }
    // do nothing with the response
})