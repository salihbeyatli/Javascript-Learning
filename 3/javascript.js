//****** */ VERİ TÜRÜNÜ ÖĞRENMEK VE VERİ TÜRÜ DÖNÜŞÜMLERİ ***

//VERİ TÜRÜNÜ ÖĞRENME TYPEOF

let price = 111
let stringPrice = "111"
let hasPassword = true

console.log("price: ",typeof(price))

console.log("stringPrice: ",typeof(stringPrice))

console.log("hasPassword: ",typeof(hasPassword))

typeof("11") === "string" //true --> türünün string olduğunu onaylıyor


//STRİNG BİLGİLERİ İNT VE FLOAT'A DÖNÜŞTÜRMEK:

let number1 = "11"
number1 = parseInt(number1) //string --> number
console.log("number1: ", number1, typeof(number1) )


let number2 = "11px"
number2 = parseInt(number2) // parse içindeki sayıyı almaya çalışır
console.log("number2: ", number2, typeof(number2) )

let number3 = "11.1"
number3 = Number(number3) // number sadece sayıya çevirmeye çalışır
console.log("number3: ", number3, typeof(number3) )

let number4 = "11.4px"
number4 = parseFloat(number4)
console.log("number4: ", number4, typeof(number4) )




//NUMBER VERİ TİPİNDEN STRİNG'E DÖNÜŞTÜRMEK:

let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5))
