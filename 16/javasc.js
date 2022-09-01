// ******* FONKSİYONLARA PARAMETRELER ATAMAK VE FONKSİYONDAN GERİDÖNÜŞ ALMAK *******

// TEMEL KURALLAR:
// 1: BİR FONKSİYON BİR VEYA BİRDEN FAZLA PARAMETRE ALABİLİR VEYA HİÇ ALMAYABİLİR
// 2: BİR FONKSİYON DIŞARI BİLGİ GÖNDEREBİLİR(RETURN) VEYA GÖNDERMEYEBİLİR
// 3: MÜMKÜNSE FONKSİYONUN BAĞIMLILIKLARINI AZALTMAK GEREKİR

let firstName = "Lorem"

function greetings(firstName="", lastName=""){ //default parametre alıyor
    // console.log(`Hello${firstName ? firstName : ""}`)
    console.log(`Hello ${firstName}`)
    console.log(`Hello ${firstName} ${lastName}`)
} 

console.log(firstName) // değişken
greetings() // fonksiyona parametre göndermedik 
greetings("Apple")



function greetings2(firstName, lastName) {
    let info = `Hello ${firstName} ${lastName}`
    return info
}



let greetingsInfo = greetings2("Ad", "Soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id, info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htlmInfo = `<span style="color:red">Color REDDD</span>`

domIdWriteInfo("greeting", htlmInfo)
domIdWriteInfo("info", greetings2("Name", "Lastname"))
