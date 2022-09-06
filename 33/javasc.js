// ARRAY MAP KULLANIMI

const USERS = ["AYSE", "MEHMET", "TUGCE", "AKSEL"]

//userName içindeki orjinal isim kalsin
//shortName içindeki ilk harf büyük . (A.)
//newName içindeki ilk harf büyük olsun

const NEW_USERS = USERS.map( user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item => 
//     {
//         return {
//             userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//         }
//     }
// )


const USERS_OBJ = USERS.map( item => (
        {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).
        toLowerCase()}`}
    )
)


console.log(USERS_OBJ)