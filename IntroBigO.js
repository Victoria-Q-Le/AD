// Write a function to calculate the sum from 1 up to (and including n) some number

// function addUpto1 (n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++){
//     total += i
//   }
//   console.log(total);
//   return total
// }
//
// addUpto1 (5)

function addUpto2 (n) {
  let total = n * (n+1)/2
  console.log(total);
  return total
}

addUpto2 (5)
