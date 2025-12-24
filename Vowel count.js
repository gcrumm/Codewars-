// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let arr = str.split('')
  return arr.reduce((count,element) => {
    if (vowels.includes(element.toLowerCase())) {
      return count + 1
    }
    return count
  }, 0)
}