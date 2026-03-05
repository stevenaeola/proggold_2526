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
