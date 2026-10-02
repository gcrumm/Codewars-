// Description:
// Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a digit. They need help getting things back in order.

// Implement the function which takes in an array of quotes, and a string comprised of letters and a single digit (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

// Return the quote along with the character who said it:

// quotes = [
//   "I am vengeance. I am the night. I am Batman!",
//   "Holy haberdashery, Batman!",
//   "Let's put a smile on that faaaceee!"
// ]
// hero = "Rob1n"

// Should output => "Robin: Holy haberdashery, Batman!"
// You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string. The quotes either belong to "Batman", "Robin", or "Joker".

// My solution

let getQuote = function(quotes, hero){
  let index = null;
  for(let ele of hero){
    if(!isNaN(ele))
      index = Number(ele);
  }
  
  let name;
  if (hero.includes('J') || hero.includes('j')) {
    name = 'Joker';
  } else if (hero.includes('R') || hero.includes('r')) {
    name = 'Robin';
  } else {
    name = 'Batman';
  }
  
  return `${name}: ${quotes[index]}`;
}