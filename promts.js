let ageInput;
let age;

while(true){
    ageInput = prompt("🔞 Welcome to Lucky 777!\nPlease enter your age to continue or press 0 to quit:");
    //TO QUIT
    if (ageInput === "0") {
        alert("👋 Exiting... Come back when you're ready!");
      
      break;
    }
      age = Number(ageInput);

      if(!Number.isInteger(age) || age <= 0){
        alert("⚠ Please enter a valid age (numbers only).");
      }else if (age < 18) {
        alert("🚫 Sorry, only players aged 18 or older can play Lucky 777.\nPlease come back when you're of legal age!");
        break;
    }else{
        break;
    }
    }

if(age >= 18){

    //Game start
let credits = 100;
let costPerGame2 = 20; 

while(credits>0){
    let userInput = prompt("🎰 Welcome to Lucky 777!\nPick a number between 1 and 36 (whole numbers only). \nWill today be your lucky day? \n Don't forget you can press 0 at any time to exit.");
    //to exit

    if (userInput === "0"){
    alert("👋 Exiting the game... Better luck next time!");
    break;
}

let numberInput = Number(userInput);
if(Number.isInteger(numberInput) && 0 < numberInput && numberInput< 37){
    let randomNumber = Math.floor(Math.random()*36+1);
 
 credits -= costPerGame2;
 
 if(numberInput === randomNumber){
 alert(`💥 JACKPOT! 💥\nYou picked ${numberInput}, the wheel spun... and landed on ${luckyNumber}!\n🍀 Lady Luck is with you tonight! 🥳\n💸 You're walking away a winner!`);
 break;   
 }
  else{ 
    if(credits >= costPerGame2){
    alert(`🎲 You picked ${numberInput}, but the wheel landed on ${randomNumber}.\n😬 Not this time!\n💳 Remaining credit: ${credits}\nTry again if you dare!`);
} else{
    alert(`😢 You're out of credits!\nThe wheel landed on ${randomNumber}.\nBetter luck next time!`);
    }
  }
}
else{
alert("⚠️ You didn't follow the game rules! \nIf you want to continue the game, enter a whole number between 1 and 35, or should I call security? 🚨");
        }
    }
}
