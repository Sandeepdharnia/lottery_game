while(true){
    let userInput = prompt("🎰 Welcome to Lucky 777!\nPick a number between 1 and 36 (whole numbers only).\nWill today be your lucky day?");
    //to exit
    if (userInput === 0){
    alert("👋 Exiting the game... Better luck next time!");
    break;
}

let numberInput = Number(userInput);
if(Number.isInteger(numberInput) && 0 < numberInput && numberInput< 37){
 // our magic random number maker code
 if(numberInput === //name of random code){
// alert(`💥 JACKPOT! 💥\nYou picked ${numberInput}, the wheel spun... and landed on ${luckyNumber}!\n🍀 Lady Luck is with you tonight! 🥳\n💸 You're walking away a winner!`);
 //     break;   
 //}else{
//    alert(`🎲 You chose ${numberInput}... the wheel landed on ${luckyNumber}.\n😬 Not your lucky spin!\n🎟️ Chances left: ${chances}\n🎰 Give it another shot!`);
//}
}else{
alert("⚠️ You didn't follow the game rules! \nIf you want to continue the game, enter a whole number between 1 and 35, or should I call security? 🚨");
}
}