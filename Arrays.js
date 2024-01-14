const ironman_Team=['Tony','Nat','vision','rhody']
console.log(ironman_Team[0]);

//Array methods

//push
ironman_Team.push("Peter parker")
console.log(ironman_Team)
ironman_Team.push("black panther");
console.log(ironman_Team)
ironman_Team.pop();
console.log(ironman_Team)
ironman_Team.pop();
console.log(ironman_Team);


let steve_rogersTeam=['Steve rogers','Bucky','Clint','Scott'];
steve_rogersTeam.unshift("Wanda");
console.log(steve_rogersTeam)
steve_rogersTeam.shift();
console.log(steve_rogersTeam)
 
let Avengers=['Ironman','Captain','Spiderman','Hulk','Thor'];
console.log(Avengers.includes("Thor"))
console.log(Avengers.indexOf(4));
let index=Avengers.indexOf("Hulk")
