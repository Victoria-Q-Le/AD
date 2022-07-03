// // Write a function to calculate the sum from 1 up to (and including n) some number
//
// function addUpto1 (n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++){
//     total += i
//   }
//   // for n times, there are n operations plus n assigments (= sign)
//   console.log(total);
//   return total
// }
// //
// // addUpto1 (5)
//
// function addUpto2 (n) {
//   let total = (n * (n+1))/2
//   console.log(total);
//   return total
// }
// // only 3 simple operations
// // addUpto2 (5)
//
// let t1 = performance.now();
// addUpto2(1000000000)
// let t2 = performance.now();
// console.log(`time elapsed: ${(t2 - t1)/1000} seconds`);
// // this is to visualize the time complexity

let instructor = {
  firstName: "Victoria",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}

Object.keys(instructor)
