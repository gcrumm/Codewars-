// Description:
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// My solution

function mergeArrays(a, b) {
  let combined = a.concat(b).sort((a, b) => a - b);
  return Array.from(new Set(combined));
}