// Description:
// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// "codewars" should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

// My solution

function scrollingText(text){
  text = text.toUpperCase();
  let result = [];
  for(let i = 0; i < text.length; i++){
    let scroll = text.slice(i) + text.slice(0, i);
    result.push(scroll);
  }
  return result;
}