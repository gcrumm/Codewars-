// Description:
// The Problem
// Your colleague has been working on a program that returns the number of days of holiday that people in your coding company can take in the remainder of the year.

// His program outputs the number of holidays each employee has left as an integer within an array. However, the program is not working properly. Alongside the element that specifies the number of holidays are several other useless elements. These other elements are of a variety of data types and none are integers.

// Your colleague boasts that he has more days of holiday left than you.

// Your Task
// You are given two arrays, a1 (your colleague's) and a2 (yours), which contains at most one integer: the number of days of holiday that person has left.

// If your colleague is telling the truth, the function should return the string "Right". If your colleague is wrong, the function should return the string "Wrong". If you both have the same number of days of holiday, the function should return the string "Same". If your colleague's program is beyond repair and does not produce an integer in either arrays, the function should return a string "Not possible".

// My solution

function holidayCount(a1, a2) {
  a1 = a1.filter(a => Number.isInteger(a));
  a2 = a2.filter(a => Number.isInteger(a));
  if(a1.length === 0 || a2.length === 0) return 'Not possible';
  if(a1[0] === a2[0]) return 'Same';
  return a1[0] > a2[0] ? 'Right' : 'Wrong';
}