// Description:
// Task
// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

// Examples
// "11010101010101" ->  255 (= 0b11111111)
// "111" ->  7
// "1000000" -> 1
// "000" -> 0

// My solution

function eliminateUnsetBits(number) {
  if(number == 0) return 0;
  return parseInt(number.replaceAll(0, ''), 2);
}