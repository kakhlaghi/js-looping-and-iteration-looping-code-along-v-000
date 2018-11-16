// Code your solutions in this file
function printBadges(badges) {
  for (let i =0; i<badges.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.` )
  }
  return badges
}



function tailsNeverFails(){
  let res;
  let count;
  while (res != 'tails'){
    flip = Math.random()
    if (flip >= 0.5 ){
      count ++ 1
    } else {
      res = 'heads'
      console.log( `You got Tails ${count} many times!`)
    }
  }
}
