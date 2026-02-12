let search_button = document.getElementById('search_submit');

search_button.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8090/character/search?search_term=a')
    .then(response => response.text())
    .then(body =>
      document.getElementById('search_results').innerHTML=body)

})

function displayCars(carList){
  console.log(carList)
  let row1 = document.getElementById('row1')
  row1.innerHTML= ""
  for(let car of JSON.parse(carList)){
    console.log(car.name)

    let carString=`
        <div class="col">
            <div class="card shadow-sm">
                <img src="${car.imageURL}">

                <div class="card-body">
                  <h5 class="card-title">${car.name}</h5>
                  <p class="card-text">
                    Appears in Cars 3
                  </p>
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
