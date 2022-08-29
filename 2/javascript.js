//BOOLEAN

// 0 VE 1
let isActive = false //0
isActive = true //1
console.log(isActive)



let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") //True
Boolean("0") //True
Boolean("") //False

userName = "user"
console.log("User Name:", Boolean(userName))


// 0, -0, null, false, NaN, undefined, ("") 

Boolean(0) //False
Boolean(-0) //False
Boolean(-0.1) //True
Boolean(0 === 0) //True --> Sıfır sıfıra eşit mi?

// Not: Kara yapıları bölümünün parçası
Boolean(userName.length > 0) //True username uzunluğu 0 dan fazla





