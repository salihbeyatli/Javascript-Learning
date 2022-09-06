// ARRAY FOREACH METOTU

const PRODUCTS = ["laptop", "phone", "speaker", "pc", "server", "mouse", "keyboard"]

// PRODUCTS.forEach((product, index, array) => console.log(array[index] = product + " 111"))

PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)

console.log(PRODUCTS)

const userListDOM = document.querySelector("#userList")
PRODUCTS.forEach(item => {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})



