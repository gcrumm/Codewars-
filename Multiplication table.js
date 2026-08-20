// Description:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// My solution

function multiplicationTable(size) {
  let result = [];
  for(let i = 1; i <= size; i++){
    result.push([]);
  }
  
  for(let row = 0; row < size; row++){
    for(let column = 0; column < size; column++){
     result[row].push((row + 1) * (column + 1));
    }
  }
  return result;
};