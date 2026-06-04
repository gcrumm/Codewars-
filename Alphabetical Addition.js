// Description:
// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

// My solution

function addLetters(...letters) {
  
  if(letters == '') return 'z';
  let nums = letters.map(letter => [...letter].map(char => char.charCodeAt(0) - 96)).flat();
  
  
  let sum = nums.reduce((a,b) => a + b, 0)
  if(sum > 26){
    sum = sum % 26;
    if(sum % 26 === 0) return 'z'
  }
  
  return String.fromCharCode(sum + 96);
}