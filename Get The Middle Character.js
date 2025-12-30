// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// My solution 

function getMiddle(s) {
  const length = s.length
  const half = Math.floor(length / 2)
  return length % 2 === 0 ? s.slice(half -1, half + 1) : s.slice(half, half + 1)
}