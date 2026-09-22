// Description:
// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

// My solution

function duplicateElements(m, n) {
   if(m.length === 0 || n.length === 0) return false;
  for(let i = 0; i < m.length; i++){
    for(let j = 0; j < n.length; j++){
      if(m[i] === n[j]){
        return true;
        break;
      }
    }
  }
  return false;
}