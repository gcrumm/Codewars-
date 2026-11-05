// Description:
// Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts a non-negative integer and returns an integer.

// We now interrupt your regularly scheduled programming
// Given the result, return the number!

// if there is more than one possibility, return the smallest
// if there are no possibilities, return Nothing or a similar empty value

// My solution

function unsquareDigits(n) {
  const numbers = String(n);
  const result = [];

  function isValidSquare(numStr) {
    const num = Number(numStr);
    const root = Math.sqrt(num);
    if (!Number.isInteger(root) || root < 0 || root > 9) {
    return false;
  }
  return String(root * root) === numStr;
  }

  function backtrack(index, path) {
    if (index === numbers.length) {
      result.push(path.join(''));
      return;
    }

    const oneDigit = numbers.slice(index, index + 1);
    if (isValidSquare(oneDigit)) {
      const root = Math.sqrt(Number(oneDigit));
      path.push(root);
      backtrack(index + 1, path);
      path.pop(); 
    }

    if (index + 1 < numbers.length) {
      const twoDigits = numbers.slice(index, index + 2);
      if (isValidSquare(twoDigits)) {
        const root = Math.sqrt(Number(twoDigits));
        path.push(root);
        backtrack(index + 2, path);
        path.pop();
      }
    }
  }

  backtrack(0, []);
  if (result.length === 0) return null;
  result.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a < b ? -1 : 1;
  });

  return BigInt(result[0]);
}