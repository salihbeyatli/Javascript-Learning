// LİSTE İÇERİSİNDEKİ SON ELEMANA ULASMAK VEYA ELEMAN EKLEMEK

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son öğre değişti..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk öğre değişti..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

// ekleme 
liDOM.innerHTML = "kendi oluşturduğumuz öğe"
//ulDOM.append(liDOM)//en sona ekleme
ulDOM.prepend(liDOM)//en başa ekleme