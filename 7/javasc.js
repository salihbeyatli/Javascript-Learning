// PROMP İLE KULLANICIDAN BİLGİ ALMAK
// ESKİ BİR YÖNTEM


let fullName = prompt("Lütfen Adınızı Giriniz")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`