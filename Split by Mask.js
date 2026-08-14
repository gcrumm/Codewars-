// Description:
// Given a xs and a mask (a list of lengths), split the string into its parts accordingly.

// Examples:
// |     xs        |  Mask (lengths) |          Output           |
// |---------------|-----------------|---------------------------|
// |  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
// |  "codewars"   |  [4, 4]         |  ["code", "wars"]         |
// Notes:
// The mask only contains strictly positive integers.
// A mask is valid if and only if the sum of the lengths is equal to the length of the string.
// Otherwise, return None.

// My solution

function split(string,mask) {
 if(mask.reduce((a, b) => a + b, 0) !== string.length){
   return null;
 }
  let result = [];
  let start = 0;
  for(let i = 0; i < mask.length; i++){
    let end = start + mask[i];
    result.push(string.slice(start, end));
    start = end;
  }
  return result;
}