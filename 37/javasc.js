// OBJECT VE ARRAY DESTRUCTURİNG NASIL KULLANILIR

// OBJECT DESTRUCTURİNG:


let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "salihbeyatli.com"
}

// OBJE İÇİNDEKİ BİLGİLERİN TEK SEFERDE ÇIKARILMASI

// let userName = settings.userName
// console.log(userName)

//RENAME && DESTRCUTURİNG
let {userName: user, password, isActive, ip:serverIP, serverName} = settings

console.log(user, password, isActive, serverIP, serverName)
console.log(settings)
console.log(user)

// OBJE İÇİNDEKİ BAZI BİLGİLERİN ÇIKARILMASI

let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings

// EĞER DEĞİŞKEN İSMİ DAHA ÖNCE TANİMLANDIYSA:
//let {userName, password, isActive, ...newSettings} = settings

console.log(userName2, password2, isActive2, newSettings)

// OBJENİN DESTRUCTURİNG İLE KOPYALANMASI

// HATALI KULLANIM
// let settings2 = settings
// settings2.userName = "değişen bilgi"
// console.log(settings)
// console.log(settings2)

let settings2 = {...settings}
settings2.userName = "değişen bilgi"
console.log(settings)
console.log(settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

let copyOfScore = [...score]
console.log(copyOfScore)
