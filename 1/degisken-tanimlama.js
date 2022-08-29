// BİR ŞEY DEĞİŞECEKSE -LET- VEYA -VAR- İLE TANIMLANIR. DEĞİŞMEYEN DEĞİŞKEN İSE -CONST- İLE TANIMLANIR

// let ve const ile degisken tanımlama:

// var ile degisken tanımlama:
//var serverName = "api.salihbeyatli.com"
//console.log(serverName)

// let ile degiskene bos tanımlamak:
let serverName;
console.log(serverName)

// let degiskene bilgi atamak:
serverName = "https://salihbeyatli.com"
console.log(serverName)

// let degiskene bilgi atayarak tanimlamak:
let password = "1234"
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:
/* HATALI KULLANIM
console.log(fullName)
fullName = "Salih beyatli";
*/

let fullName = "Salih beyatli";
console.log(fullName)

//birlestirme veya ekleme islemi
fullName = fullName + " Deneme" /* fullname += "Deneme" --> olarakta kullanılabilir. */
fullName = "2: Bilgi" + fullName 
console.log(fullName)

//const ile degiskeni bos tanimlamaya calismak:
const SERVER_PASSWORD = "DENEME123"
console.log(SERVER_PASSWORD)
//SERVER_PASSWORD = "1234" /* Calismaz cunku const ile atandi */ 

 

let okulNumarasi =  414;
if(true){
 let okulNumarasi =  245;
 console.log("Ilk blockta ki deger: "+okulNumarasi);
  if(true){
     let okulNumarasi = 312;
    console.log("Ikinci blockta ki deger: "+okulNumarasi);
     }
}
 console.log("Global scopeta ki deger: "+okulNumarasi);

 // number veri türü

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV Orani:", tax,
    "KDV Tutarı:", priceTax,
    "Fiyat:", total
)

let counter = 118
counter = counter + 1 // uzun yöntem
counter += 1;
counter ++;
console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *=10;
console.log(counter)


//islem önceliği

console.log( 2 + 3 * 10)
console.log( ( 2 + 3 ) * 10)

//mod alma
//sayi tekmi cift mi

console.log( 15 % 2) //0 ise cift, 1 ise tek

//us alma
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)

//asagi yuvarlama 
console.log( Math.floor(1.9) )

//yukarıya yuvaarlama
console.log( Math.ceil(1.2) )

//yakina yuvarlama
console.log( Math.round(1.2) )
console.log( Math.round(1.6) )


let stringNubmer = "11"
console.log(stringNubmer)
let newNumber = Number(stringNubmer)
console.log(newNumber)
console.log("Number Constractor icine bilgi gönderilrdi:", Number("111") )