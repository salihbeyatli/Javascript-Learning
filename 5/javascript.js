// ************ STRİNG VERİ TÜRÜ İŞLEMLERİ ************
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "salihbeyatli@gmail.com"
let firstName = "salih"
let lastName = "BEYATLI"

// STRİNG KARAKTER SAYISI --> LENGTH

console.log(email.length)

// İLK KARAKTERİ BULMAK -> [0]:

console.log(firstName[0])
console.log(firstName.charAt(0))

// BÜYÜK HARF / KÜÇÜK HARF:

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// STRİNG İÇİNDE İSTEDİĞİMİZ BİLGİYİ ARAMAK VE YERİNİ BULMAK -> SEARCH:

console.log(email.search("@"))
console.log(email[15])

email.search("olmayan") //-1

//BELLİ BİR YERE KADAR AL -> slice: (domain bilgis)

let DOMAIN = email.slice(email.search("@")+1) 
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.')) // sadece gmail kısmı alındı
    )

// BİLGİYİ DEĞİŞTİR -> REPLACE:

email = email.replace('gmail.com', 'salihbeyatli.com')
console.log(email)

// İSTEDİĞİMİZ BİLGİ VAR MI ? -> İNCLUDES:

email.includes('@') // True
email.includes('qweqweqweasd') // False

// İSTEDİĞİM BİLGİYLE BAŞLADI MI ? BİTTİ Mİ ? --> startsWidth, endsWidth:

console.log(
    email.endsWith('salihbeyatli.com')
)

// İLK HARFLERİNİ BÜYÜK YAPMAK

firstName = "FİRSTNAME"
lastName = "LASTNAME"
let fullName = `
${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`

console.log(fullName)
 
