const mySym= Symbol("key1");

let team={
    name:"Tony stark",
    role:"Avengers",
    turnover:100000000,
    age:54,
    isLoggedIn:true,email:"stark@mail.com"
}
//console.log(team)
console.log(team.name)
console.log(team.email);
team.email="tony@mail.com";
console.log(team.email)

//function ith obejct

    team.add=function(){
        console.log("Hello js user");
    }
    team.user=function(){
        console.log(`hello testing ,${this.age}`)
    }
