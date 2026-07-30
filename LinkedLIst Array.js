// Description:
// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here is an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function that converts a linked list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

// My solution

function listToArray(list) {
  let arr = [];
  while (list !== null){
    arr.push(list.value)
    list = list.next;
  }
  return arr;
}