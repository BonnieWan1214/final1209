/*CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"
*/

/* plan

1. Mode:  "new", "easy", "medium", "hardest", and "apocolypse" default: 0 point
2. Command "status" will show every mode and it's current points
3. Command "add" The system will ask the user 「which mode they want to add？」 then user can enter one of the mode else(The mode user enter is not in the list) denied
4. The points total
< 10 console.log("horrible newbie")
>=10 && <=20 console.log("adventurer")
>=20 && <=30 console.log("slayer")
>=30 && <=40 console.log("divined")
else console.log("eternal")
*/

let badge = {
  new:0,
  easy:0,
  medium:0,
  hardest:0,
  apocolypse:0,
};

//rename this to ShowStatus
function ShowStatus(){
  //loop through the badge and log all the mode and all their corresponding points
  for (let key in badge) { 
    console.log(`${key}: ${badge[key]} points`);
}}

//rename this to AddPoints
function AddPoints(){
  //Add the point to the correct mode by capturing the readline
  readline.question("Which mode would you like to add a ? (new, easy, medium, hardest, apocolypse): ", (key) => {
if (badge.hasOwnProperty(key)) { 
   badge[key] += 1; 
   console.log(`Point added to ${key}.`); 
} else {
   console.log("Invalid mode"); 
  }
StartApp(); 
});
}

function TotalPoints() {
  let totalTasks = 0;
for (let key in badge) {
totalTasks += badge[key];
}
if (totalTasks < 10) { 
  console.log('horrible newbie');
} else if (totalTasks >= 10 && totalTasks <= 20) { 
  console.log('adventurer');
} else if (totalTasks > 20 && totalTasks <= 30) { 
  console.log('slayer');
} else if (totalTasks > 30 && totalTasks <= 40) { 
    console.log('divined');
} else { console.log('eternal');
}
  StartApp();

}


function StartApp(){
  readline.question("What is your command? ShowStatus / AddPoints / TotalPoints  ", _command=>{
    if(_command === "quit"){
      readline.close();
    }else if (_command === "ShowStatus") {
        ShowStatus(); 
        StartApp();
    }else if (_command === "AddPoints") {
        AddPoints(); 
    }else if (_command === "TotalPoints") {
        TotalPoints(); 
        StartApp();  
    } else{
      console.log("Invalid command.");
      StartApp();
    }
  })
}

StartApp();