// Description:
// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

// My solution

function toDayOfYear(arr) {
  let day = 0
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if(arr[2] % 100 === 0 && arr[2] % 400 === 0){
    monthDays[1] += 1
  }else if(arr[2] % 100 === 0){
    monthDays[1] += 0
  }else if(arr[2] % 4 === 0){
    monthDays[1] += 1
  }
  for(let i = 0; i < arr[1] - 1; i++){
    day += monthDays[i]
  }
  return day + arr[0]
  }