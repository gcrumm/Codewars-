// Description:
// Your task is to take a given range and return an array of the prime numbers in that range.

// You will write a function with the following parameters:

// start is the integer from which your range starts. (inclusive)

// end is the integer at which your range ends. (inclusive)

// If the range does not contain any prime numbers return an empty value in your language (for example null / None / nil).

// Examples:

// primes(5, 7)  // [5, 7]
// primes(8, 9)  // null
// primes(1, 10) // [2, 3, 5, 7]

// My solution

function primes(start, end){
  let results = [];
  
	for(let i = start; i <= end; i++){
    function prime(num){
      if(num <= 1) return false;
      if(num === 2) return true;
      if(num % 2 === 0) return false;
      for(let i = 3; i <= Math.sqrt(num); i += 2){
        if(num % i === 0) return false;
      }
      return true;
    }
    
    if(prime(i)) results.push(i);
  }
    return results.length > 0 ? results : null;
  }