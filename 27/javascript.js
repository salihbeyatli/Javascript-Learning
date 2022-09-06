// ÇOK KULLANILAN ARRAY METOTLARI VE ARRAY İÇİNDE ARRAY

// Array içinde array:

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length) // Array içindeki istediğimiz array'ın length bilgisini aldık
console.log(items[0][0]) // Ayşe bilgisine ulaştık

// Array içerisinden öğre ayırmak -> splice(pos, item?)

let newItems = items.splice(1, 5)
console.log("new items: ", newItems)
console.log("items: ", ıtems)

// Array içerisindeki öğenin index bilgisini bulmak -> indexOf("value")

items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"));


// Array kopyalamak -> slice, [...ES6]

let copyItems = items
console.log(items)

copyItems.pop() // son öğeyi çıkarttık
console.log("copyItems :", copyItems);
console.log("items: ", items);

console.log("kopyalandıktan sonraki hali: ")
copyItems = items.slice() // kopyalama yaptı
copyItems.pop() // son öğeyi çıkarttık
console.log("copyitems ", copyItems);
console.log("items", items);


// İki array bilgisini birleştirmek -> [...ES6, ...ES6]

let es6Items = [...items] // es6 ve sonrasında gelem kopyalama işlemi
console.log(es6Items);

let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapısını birşleştirmek
console.log(allUsers);

// Array içerisindeki bilgiyi String'e çevirmek -> toString, join

console.log(allUsers.toString);
console.log(allUsers.join("---"));

//İstediğimiz index bilgisine öğe eklemek

allUsers.splice(allUsers.length-1, 0, "Melissa") // sondan bir öncekine ekleme
allUsers.splice(Marh.floor(allUsers.length/2), 0, "lorem") // ortaya ekleme
console.log(allUsers);
