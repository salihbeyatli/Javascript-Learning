// OBJECT KEY - VALUE
// [1, 2, 3, 4, 5]

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,
    modelName: "MacBook Pro", // EN ÇOK KULLANILAN YAPI
    model_name: "MacBook Pro",
}

console.log(laptop1)

// DOĞRU ANAHTAR BİLGİSİ OLUŞTURMAK

console.log(laptop1.brand, laptop1[brand])
console.log(laptop1.model, laptop1[model])
console.log(laptop1["2kg"])

// ANAHTAR BİLGİSİNE YENİ DEĞER EKLEMEK

laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// YENİ BİLGİ EKLEMEK

laptop1.version = "10.15.7"
console.log(laptop1)

// ANAHTAR BİLGİLERİNE ULAŞMAK(KEYS) -> Object.keys(item)

keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
});

// DEĞER BİLGİLERİNE ULAŞMAK(VALUES) -> Object.values(item)

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)
});


let setting = {
    password: 1234,
    userName: "user1"
}