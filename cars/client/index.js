let search_button = document.getElementById('search_submit');

search_button.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8090/character/search?search_term=a')
    .then(response => response.text())
    .then(body =>
      document.getElementById('search_results').innerHTML=body)

})