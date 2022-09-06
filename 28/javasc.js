// FOR DÖNGÜSÜ

// for ([başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// yapılacak işlem
// }

let users = ["Lorem", "Ipsum", "Dolor", ]


// for (let index = 0; index < 10; index++){
//     console.log
// }

const userListDOM = document.querySelector("#userList")

for (index=0; index < users.length; index++){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}