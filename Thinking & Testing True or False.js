// Description:
// No Story

// No Description

// Only by Thinking and Testing

// Look at the results of the testcases, and guess the code!

// My solution

function testit(n){
  let count = 0;
  for(let num of n.toString(2)){
    if(num === '1') count ++ 
  }
  return count;
}