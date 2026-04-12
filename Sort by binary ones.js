// Description:
// In this example, you need to implement a function that sorts a list of integers based on their binary representation.

// The rules are simple:

// sort the list based on the amount of 1s in the binary representation of each number.
// if two numbers have the same amount of 1s, the shorter string goes first. (ex: "11" goes before "101" when sorting 3 and 5 respectively)
// if the strings have the same length, lower decimal number goes first. (ex: 21 = "10101" and 25 = "11001", then 21 goes first as it's lower)
// Examples:

// Input: [1,15,5,7,3]

// ( in binary strings is: ["1", "1111", "101", "111", "11"])
// Output: [15, 7, 3, 5, 1]

// (and after sortByBinaryOnes is: ["1111", "111", "11", "101", "1"])

// My solution

function sortByBinaryOnes(list){
  return list.sort((a,b) =>{
    let binaryA = a.toString(2);
    let binaryB = b.toString(2);
    let onesA = binaryA.split('1').length - 1;
    let onesB = binaryB.split('1').length - 1;
    if(onesA !== onesB){
      return onesB - onesA;
    }else if(binaryA.length !== binaryB){
      return binaryA - binaryB;
    }else{
      return a - b
    }
  })
}