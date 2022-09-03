// INPUT İÇİNDEKİ DEĞERİ(VALUE) ALMAK

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)


function formSubmit(event){
    event.preventDefault() // default işlem engellendi
    console.log("işlem gerçekleşti")
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)
    localStorage.setItem("score", scoreInputDOM.value)
}
