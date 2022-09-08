// HATA YÖNETİMİ İÇİN TRY CATCH KULLANIMI

let products;

try {
    products.forEach(item => console.log(item))
} catch (error) {
    console.log("error: ", error)
}

console.log("hata yönetimi düzgün çalışıyor")


let info = "salihbeyatli"
console.log(info)