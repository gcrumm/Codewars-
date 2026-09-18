// Description:
// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
// More examples in the test cases.

// Good luck!

// My solution

function common(a,b,c){
 let count = arr => {
   let m = new Map();
   for(let n of arr) m.set(n, (m.get(n) || 0) + 1);
   return m
 }
 
 let ca = count(a), cb = count(b), cc = count(c);
  let sum = 0;
  
  for (let [num, cnt] of ca) {
    if (cb.has(num) && cc.has(num)) {
      sum += num * Math.min(cnt, cb.get(num), cc.get(num));
    }
  }
  
  return sum;
}