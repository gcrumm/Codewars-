// Description:
// The task is very simple: you must return pyramids. Given a number n, you build a pyramid with n floors

// For example , given a n=4 you must to print this pyramid:

//    /\
//   /  \
//  /    \
// /______\ 
// Other example, given a n=6 you must to print this pyramid:

//      /\
//     /  \
//    /    \
//   /      \
//  /        \
// /__________\
// Another example, given a n=10, you must to print this pyramid:

//          /\
//         /  \
//        /    \
//       /      \
//      /        \
//     /          \
//    /            \
//   /              \
//  /                \
// /__________________\
// Note: a line feed character is needed at the end of the string.

// My solution

function pyramid(n){
  let pyramid = "";
  for(let i =0; i < n; i++){
   let leftSpace = ' '.repeat(n - i - 1);
   let leftSide = '/';
   
   let middle = i === n - 1
  ? '_'.repeat((n - 1) * 2)
  : ' '.repeat(i * 2);
    
   let rightSide = '\\' 
   pyramid += leftSpace + leftSide + middle + rightSide + '\n';
  }
  return pyramid;
}