// FORM SUBMİT

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)

function formSubmit(event){
    event.preventDefault() // default işlem engellendi
    console.log("işlem gerçekleşti")
}
