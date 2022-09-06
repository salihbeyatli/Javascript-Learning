// array - dizilerle çalışmak

// Array oluşturmak

let domain = "salihbeyatli"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] // boş liste

// Array içerisindeki eleman/oge sayısını öğrenmek

console.log(
    items.length // array içindeki öğe sayısı
);

//document.querySelector("items").innerHTML = items.length

// Array içindeki ilk elemanın çağırılması

console.log(items[0]);

//Array içindeki son elemanın çağırılması

console.log(items[items.length - 1])

// Array içindeki ortadaki elemanın çağırılması

console.log(
    items[Math.floor(items.length/2)]
)

// değişken içindeki bilginin Array olup olmadığının kontrol edilmesi

console.log(
    typeof (items) //object olarak çıktı veriyor
);

console.log(
    Array.isArray(items)
);

// hangileri isArray -> true verir

console.log(
    Array.isArray([])
);

console.log(
    Array.isArray(1)
);

console.log(
    Array.isArray(true)
);





