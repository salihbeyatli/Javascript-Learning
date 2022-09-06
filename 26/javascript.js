// ARRAY YAPISINA ÖĞE EKLEMEK VE ARRAY İÇERİSİNDEN İSTENİLEN ÖĞRENİN ÇIKARILMASI

let items = [10, 20, 30, 40]
console.log("items - ilk hali :", items);

// ARRAY: sona öğe/eleman ekleme -> push

items.push(50)
console.log("50 : ", items)

// Array: basa öğe ekleme -> unshift

items.unshift(5)
console.log("5 : ", items)

// Array: sondaki öğeyi çıkarmak ->

let lastItem = items.pop() // son elemanı lastItem içerisine ekledi
console.log("lastItem: ", lastItem, ", İtems:", items);

// Array: baştaki öğeyi çıkarmak ->

let firstItem = items.shift() // ilk elemanı firstItem içerisine ekledi
console.log("firstItem: ", firstItem, ", items: ", items)

// Array içindeki bir öğenini bilgisini değiştirilmesi


// ilk elemanın değiştirilmesi
items [0] = 5;
console.log(items)

// sonuncu elemanın değiştirilmesi
items[items.length - 1] = 1000
console.log(items)




