// TERNARY OPERATÖR İLE SHORT İF KULLANIMI

// eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunumadı yaz

let userName = prompt("kullanıcı bilginizi giriniz")
let info = document.querySelector("#info")

// ternary kullanımı
//kosşul ? doğruysa : yanlıssa

info.innerHTML = `${userName ? userName : "kullanıcı bilginiz bulunamadı :("}`
