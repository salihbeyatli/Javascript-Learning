// TEMPLATE LİTERALS KULLANIMI
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

//ESKİ YÖNTEM
let username = "salih"
const DOMAIN = "salihbeyatli.com"

let email = username + "@" + DOMAIN
console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresin:", email)

//YENİ YÖNTEM
let info = `
Merhaba ${username} sitemize hoşgeldin.. 
mail adresin: ${email} 
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
günün saat bilgisi: ${new Date().getHours()}

kısa isminiz: ${username[0]}.
`
console.log(info)


const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable =`
        <table border>
    <tbody>
      <tr>
        <td>Kitap</td>
        <td>${kitap.ad}</td>
      </tr>
    <tr>
        <td>Yazar</td>
        <td>${kitap.yazar}</td>
      </tr>
        <tr>
        <td>Tarih</td>
        <td>${kitap.tarih}</td>
      </tr>
   </tbody>
    </table>
  `;
        
  document.body.innerHTML = bookTable
