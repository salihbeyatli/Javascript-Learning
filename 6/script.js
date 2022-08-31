//DOM


// pathname
console.log(document.location.pathname)

console.log(document.head)
console.log(document.body)

console.log(document.URL)
console.log(document.baseURI)

document.body.style.backgroundColor = "aqua"


// DOM İÇİNDEN OGE SEÇİMİ

let title = document.getElementById("title")
title.innerHTML = "deneme"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
link.innerHTML = "Link bilgisi değişti"
link.style.color = "red"
link.classList.add('btn')
console.log(link)