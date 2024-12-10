const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. 
There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". 
By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.
Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed


When a color is toggled from true to false, also remove the color from userColors. 
You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

/*
Plan
1. Features: AddUserColor
Prompt the user to enter the name of a fruit
Check if the fruit is in allowedFruits
If not notice them If yes add it to userColor
In the end show DisplayUserColors

2. Features: DisplayUserColors
Display the current list of userColor
If the list is empty, inform the user

3.Features: ToggleThemeColor
Ask user which color they want to toggle
When the color is toggled inform the user 

StartApp
if theme.color is true : AddUserColor();
else inform the user toggle first

*/

let userColors = [];
let theme = {
  //the 5 color and their boolean value goes here
  red: true,
  green: true, 
  blue: true,
  yellow: true,
  orange: true,
};

//rename this to AddUserColor
function AddUserColor(){
  //add a color to userColors
  readline.question("What color do you want to add to your favorite list? ", (color) => {
    if (theme.hasOwnProperty(color)) { // check if color is part of the 5 colors
    if (theme[color] === false) { // if color is not include  
      console.log("This color is disabled!");
    } else {
    if (!userColors.includes(color)) { 
    userColors.push(color);
    console.log(`${color} has been added to userColor!`); } }
    } else {
      console.log("Only allowed to pick red, green, blue, yellow or orange!");
}
DisplayUserColors(); // show DisplayUserColors
StartApp(); 
}); 
}


//rename this to DisplayUserColors
function DisplayUserColors(){
  //add a color to userColors
  if (userColors.length === 0) { 
    console.log("Usercolor is empty.");
} else {
console.log("Here is the list of color:");
for (let color of userColors) {
console.log(color); 
} }
}

//rename this to ToggleThemeColor
function ToggleThemeColor(){
  //ask for a color to toggle
  readline.question("Which color do you want to toggle ? ", color => {
  theme.color = !theme.color;
  console.log(`${color} has been toggled! It is now ${theme.color}.`);
} )}


function StartApp(){
  readline.question("What is your command? Addcolor / Displaycolor / Toggle / quit ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "Addcolor"){ 
      if (theme.color === true){ 
      AddUserColor();
    } else {
    console.log("Toggle first!") 
    StartApp();
    }
    } else if(_command === "Displaycolor"){ 
      DisplayUserColors();
      StartApp();
    } else if(_command === "Toggle"){ 
      ToggleThemeColor();
      StartApp();
    } else{
      StartApp();
    }
  })
}

StartApp();