// Description:
// Lore
// Geralt has taken on a new contract, but the peasants, as usual, didn't understand much. They cannot describe the creature itself, but they managed to tell him what it fears and hides from. You need to help Geralt check his Bestiary and accurately identify what he is hunting, so the witcher can properly prepare his oils and potions.

// Your Task
// Write a function identifyMonster(weaknesses, bestiary) that matches the monster's fears from the peasants' tales with the knowledge from the Bestiary. The function must return the name of the monster whose vulnerabilities include all the weaknesses listed by the peasants.

// Input
// weaknesses: A list of weaknesses noticed by the peasants. For example: ["Igni", "Silver"].

// bestiary: A reference guide where the key is the monster's name and the value is an list of its known vulnerabilities.

// Output
// monster_name (String): The name of the identified monster.

// If no creature from the Bestiary fits the description, the function should return the string "Unknown monster".

// Example
// const bestiary = {
//   "Griffin": ["Grapeshot", "Hybrid Oil", "Aard"],
//   "Noonwraith": ["Yrden", "Moon Dust", "Specter Oil"],
//   "Drowner": ["Igni", "Necrophage Oil"]
// };

// identifyMonster(["Igni", "Necrophage Oil"], bestiary); 
// // Returns: "Drowner"

// identifyMonster(["Yrden", "Moon Dust"], bestiary); 
// // Returns: "Noonwraith" (since these vulnerabilities are in its list)

// identifyMonster(["Silver", "Garlic"], bestiary); 
// // Returns: "Unknown monster"
// Notes / Constraints
// The weaknesses list will always contain at least one element.
// A monster is considered a match if it has all the weaknesses from the provided weaknesses list (even if the Bestiary lists additional vulnerabilities for it).
// Uniqueness: If a match exists in the bestiary, it is guaranteed to be unique (no two monsters will match the exact same provided list of weaknesses).

// My solution

function identifyMonster(observedWeaknesses, bestiary) {
  for(let monster in bestiary){
    let weaknesses = bestiary[monster]
    let match = observedWeaknesses.every(w => weaknesses.includes(w));
    if (match){
      return monster;
    }
  }
     return "Unknown monster";
}