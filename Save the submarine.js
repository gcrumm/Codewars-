// Description:
// You are the operator of the search vessel, your task is to monitor the locator and send tasks to the rescue boat. The following commands are available to you:

// "Look for a submarine on the surface"
// "Start searching for a submarine at 'n' depth"
// "Emergency search for a possibly damaged submarine at 'n' depth"
// "Emergency assistance to victims"
// Example of received signal:
// [
//   ['~','~','~','~','~',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','(','O',')','ˑ',], // <- A submarine size 3 at a depth of 2
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
// ]
// Task
// You will be given a locator signal, your task is to give tasks for the search boat.

// Output
// "Look for a submarine on the surface" - if the submarine is intact, I am on the surface of the water
// [
//   ['~','(','O',')','~',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
// ]
// "Start searching for a submarine at 'n' depth" - if the submarine is intact and underwater
// [
//   ['~','~','~','~','~',],
//   ['ˑ','(','O',')','ˑ',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
// ] // Response - 'Start searching for a submarine at 1 depth'
// "Emergency search for a possibly damaged submarine at 'n' depth" - if the depth is too deep for this submarine and the submarine is intact (submarine length < depth)
// [
//   ['~','~','~','~','~',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','(','O',')','ˑ',],
// ] //Response - 'Emergency search for a possibly damaged submarine at 4 depth'
// "Emergency assistance to victims" - if the boat is destroyed
// [
//   ['~','~','~','~','~',],
//   ['(','O','ˑ','ˑ',')',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
// ]
// Submarine size and maximum depth
// The size of a submarine is its length. For example:

// [
//   ['~','~','~','~','~',],
//   ['ˑ','(','O',')','ˑ',], // <- A submarine size 3 
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
// ]

// [
//   ['~','~','~','~','~',],
//   ['(','O','O','O',')',], // <- A submarine size 5 
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
// ]
// The maximum depth is submarine size. Submarine size = maximum depth. For example:

// [
//   ['~','~','~','~','~',],
//   ['ˑ','(','O',')','ˑ',], // <- A submarine size 3 long can only safely dive up to 3 depth
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
// ]

// [
//   ['~','~','~','~','~',],
//   ['(','O','O','O',')',], // <- A submarine size 5 long can only safely dive up to 5 depth
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
// ]

// [
//   ['~','~','~','~','~',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['ˑ','(','O',')','ˑ',], // <- Dangerous depth for such a small submarine
// ]

// // A whole submarine at a dangerous depth should be considered whole
// Destroyed submarines examples
// [
//   ['~','~','~','~','~',],
//   ['(','O','ˑ','ˑ',')',], // <- Destroyed submarine
// ]

// [
//   ['~','(','~',')','~',], // <- Destroyed submarine
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],  
// ]

// [
//   ['~','~','~','~','~',],
//   ['ˑ','(','ˑ','ˑ',')',], // <- Destroyed submarine
// ]

// [
//   ['~','~','~','~','~',],
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',], 
//   ['ˑ','ˑ','ˑ','ˑ','ˑ',],
//   ['(','O','ˑ','ˑ',')',], // <- Destroyed submarine
// ]
// Rules
// 2 ≤ Array.length ≤ 100
// 5 ≤ Array[n].length ≤ 100
// 3 ≤ Submarine size ≤ 100
// 0 ≤ Submarine depth ≤ 100
// The submarine is always one
// The submarine will always start - '(' and end - ')'

// My solution

function getTask(arr){
  let depth = null;
  let length = null;
  let intact = null;
  
  for(let row = 0; row < arr.length; row++){
    if(arr[row].includes('(')){
      depth = row;
      let start = arr[row].indexOf('(')
      let end = arr[row].indexOf(')')
      length = end - start + 1;
      intact = arr[row]
        .slice(start + 1, end)
        .every(char => char === 'O');
      break;
    }
  }
  
    if (!intact) {
        return "Emergency assistance to victims";
    }

    if (depth === 0) {
        return "Look for a submarine on the surface";
    }

    if (depth <= length) {
        return `Start searching for a submarine at ${depth} depth`;
    }

    return `Emergency search for a possibly damaged submarine at ${depth} depth`;
};