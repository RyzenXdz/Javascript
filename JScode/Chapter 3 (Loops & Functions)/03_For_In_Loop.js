/* For In Loop Is Use To Find Key's In Object */

let obj = {
    "Bussa": "Bussi",
    "Daru": "Dari",
    "Bachra": "Bachia"
}

for(let a in obj){
    console.log(a)
}  

/* 
Output:

Bussa
Daru
Bachra


*/

/* To Print All The Obj + Keys */

let obj2 = {
    "Omer": 34,
    "ali": 23,
    "ibrahim": 13
}

console.log("\n")

for (let a in obj){
    console.log(`The Marks Of ${a} Is `, obj[a])
}