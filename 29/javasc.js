// BREAK & CONTİNUE

const LOREM_LIST = [
    "lorem", "ipsum", "dolor", "amet", "consectetur", "adipisicing", "elit"
]

let counter = 0

// for (; counter < 10; counter++){
//     console.log(counter)
//     if(counter===5) {break}          //5 e kadar dahil eder
// }

// for (; counter < 10; counter++){
//     console.log(counter)
//     if(counter===5) {continue}       //5 i dahil etmez
// }


const UL_DOM = document.querySelector("#userlistDOM")

let index = 0

for (; index < LOREM_LIST.length; index++){
    if(LOREM_LIST[index]=="dolor") {continue}
    let LI_DOM = document.createElement("li")
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}



