// Description:
// Task
// Given the number n, return the sequence of numbers from n to 1.


// Range
// The number n can be negative and also large number:  -9999  <=  n  <=  9999


// Examples
// n =  5    >>     5, 4, 3, 2, 1
// n = -1    >>    -1, 0, 1

// My solution

function seqToOne(n){
  let result = []
  let num = n
 if(n > 1){
   while(num >= 1){
     result.push(num)
     num--
   }
 }else{
   while(num <= 1){
     result.push(num)
     num++
   }
 }
  return result
}