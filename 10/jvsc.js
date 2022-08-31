// KARŞILAŞTIRMA OPERATÖRLERİ VE MANTIKSAL OPERATÖRLER

let price = 100
let user = "hakan"

// == eşitse
console.log(price == 1)
console.log(price == 100)

// === hem değeri hem de türü eşitse
console.log(price === 1)
console.log(price === 100)

// != eşit değilse
console.log(price != 1)
console.log(user != "guest")

// < küçükse
console.log(price<100)

// <= küçük veya eşitse
console.log(price<=100)

// > büyükse
console.log(price>100)

// >= büyük veya eşitse
console.log(price>=100)

// && ve
price = 0
console.log(price > 0 && user != "guest")

// || veya
console.log(price > 0 || user != "guest")

// ! değil
user = "guest"
price = 1
console.log(price > 0 && !user == "guest")

