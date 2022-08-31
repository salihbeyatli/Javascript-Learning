// *********** KOŞULLARLA ÇALIŞMAK **********************


let username = prompt("kullanıcı adınızı giriniz")

// eğer kullanıcı bilgisi varsa ekrana ismini yazdır
// eğer(username.length > 0) {console.log(username)} değilse {console.log("bilgi yok")}

if (username.length > 0) { // if kısmı her zaman true ise çalışır
    console.log(`Kullanıcı bilginiz ${username}`)
}
else{
    console.log("bilgi yok")
}