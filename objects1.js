const instaUser ={}
console.log(instaUser)
instaUser.id ="abc123",
instaUser.name="Prince",
instaUser.isLoggedIn=false
console.log(instaUser);

let obj1={1:"a",2:"b"}
let obj2={3:"c",4:"d"}
//let obj3={obj1,obj2}
//console.log(obj3)
let obj4=Object.assign(obj1,obj2)
console.log(obj4)