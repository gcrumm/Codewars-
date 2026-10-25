// Description:
// *** No Loops Allowed ***

// You will be given an array and a limit value, you must check that all values in the array are less than or equal to limit. If they all are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops. Do not modify input array.

// My soluiton

function smallEnough(a, limit){
    let inLimit = a.filter(val => val <= limit);
    return inLimit.length === a.length;
}