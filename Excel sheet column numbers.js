// Description:
// Write a function that, given a column title as it appears in an Excel sheet, returns its corresponding column number.

// All column titles will be uppercase.

// Examples:

// Column title: "A" --> return 1
// Column title: "Z" --> return 26
// Column title: "AA" --> return 27

// My solution

function titleToNumber(title) {
  let result = 0;
  for(let i = 0; i < title.length; i++){
    let num = title.charCodeAt(i) - 64;
    result = result * 26 + num;
  }
  return result;
}