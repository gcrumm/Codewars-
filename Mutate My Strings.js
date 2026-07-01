// Description:
// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

// My solution

function mutateMyStrings(stringOne, stringTwo){
 let result = [stringOne];
 let arrOne = stringOne.split('');
 for(let i = 0; i < stringOne.length; i++){
   if(arrOne[i] !==stringTwo[i]){
     arrOne[i] = stringTwo[i]
     result.push(arrOne.join(''))
   }
 }
  return result.join('\n') + '\n';
}