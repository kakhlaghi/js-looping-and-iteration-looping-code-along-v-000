// Code your solutions in this file
function printBadges(badges) {
  for (let i =0; i<badges.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.` )
  }
  return badges
}



function tailsNeverFails(){
  let tails = 0;
  while(Math.random() >= 0.5){
    tails ++ 1;
    }
    console.log( `You got Tails ${count} many times!`)
}
