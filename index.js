// Code your solutions in this file
function printBadges(badges) {
  for (let i =0; i<badges.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.` )
  }
  return badges
}


function tailsNeverFails(){
  let res;
  while (res != 'tails'){
    if (Math.random()) >= 0.5 {
      console.log(`You got `)
    } else {
      res = 'heads'
    }
  }
}
