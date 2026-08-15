// Description:
// Sensor Trend Reversals
// A sensor records a sequence of integer readings.

// Your task is to count how many times the trend changes between:

// increasing
// decreasing
// A trend reversal occurs when an increasing sequence becomes decreasing, or when a decreasing sequence becomes increasing.

// Consecutive equal readings do not create a direction and must be ignored.

// Examples
// countDirectionChanges([1, 3, 2, 4]);
// // 2
// The directions are increasing, decreasing, then increasing, so the trend changes twice.

// countDirectionChanges([5, 3, 1]);
// // 0
// The readings are always decreasing.

// countDirectionChanges([1, 1, 3, 3, 2]);
// // 1
// Equal consecutive readings are ignored. The effective sequence is [1, 3, 2].

// countDirectionChanges([4, 4, 4]);
// // 0
// There is no increasing or decreasing trend.

// countDirectionChanges([]);
// // 0
// Input
// readings is an array of integers.

// Output
// Return the number of times the trend changes direction.

// Constraints
// The array may be empty.
// Every element is an integer.
// Consecutive equal values are ignored.
// After consecutive duplicates are ignored, fewer than three readings produce 0.

// My solution

function countDirectionChanges(readings) {
  readings = readings.filter((num, i) => num !==readings[i - 1]);
  let count = 0;
  for(let i = 1; i < readings.length; i++){
    if(readings[i] > readings[i - 1] && readings[i] > readings[i + 1] ||
      readings[i] < readings[i - 1] && readings[i] < readings[i + 1]){
      count ++
    }
  }
  return count;
}