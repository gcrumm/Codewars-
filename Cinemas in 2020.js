// Description:
// Given an array of seats, return the maximum number of new people which can be seated, as long as there is at least a gap of 2 seats between people.

// Empty seats are given as 0.
// Occupied seats are given as 1.
// Don't move any seats which are already occupied, even if they are less than 2 seats apart. Consider only the gaps between new seats and existing seats.
// Examples
// [0, 0, 0, 1, 0, 0, 1, 0, 0, 0] ➞ 2
// // [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

// [0, 0, 0, 0] ➞ 2
// // [1, 0, 0, 1]

// [1, 0, 0, 0, 0, 1] ➞ 0
// // There is no way to have a gap of at least 2 chairs when adding someone else.
// Notes
// Notice how there may be several possibilities for assigning seats to people, but these cases won't affect the results.
// All seats will be valid.

// My solution

function maximumSeating(seats) {
  let count = 0;
  for(let i = 0; i < seats.length; i++){
    if(seats[i] === 0){
    
    let left = (i < 1 || seats[i - 1] === 0) &&
                 (i < 2 || seats[i - 2] === 0);
    
    let right = (i > seats.length - 2 || seats[i + 1] === 0) &&
                  (i > seats.length - 3 || seats[i + 2] === 0);
    
    if(left && right){
      seats[i] = 1;
      count ++;
    }
   }   
  }
  
  return count;
}