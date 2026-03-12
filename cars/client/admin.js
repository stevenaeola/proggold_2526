// modal code from https://getbootstrap.com/docs/5.3/components/modal/#via-javascript
let authModal = document.getElementById('authModal')
if (authModal) {
    console.log("Launching login modal")
    const myModal = new bootstrap.Modal(document.getElementById('authModal'))
    myModal.show()
}
else {
    console.log("couldn't find modal element")
}




function displayCars(carList){
  console.log(carList)
  let row1 = document.getElementById('row1')
  if(!row1){
    return;
  }
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
                
                <div class="card-body">
                <div class = "card-image">
                    <img src="${car.imageURL}">
                </div>
                  <h5 class="card-title">${car.name}</h5>
                  <p class="card-text">${filmText} </p>
                </div>
              </div>
          </div>`
    row1.innerHTML+=carString
  }
}