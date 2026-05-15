// Description:
// Description
// We have a piece of square cardboard, with side length n. We use it to make a cuboid cup - five sides are paper, one side is empty:

// _____________________________
// |                           |
// |                           |
// |                           |
// |                           |
// |                           |
// |                           |
// |                           |
// |___________________________|
// First we need to cut four identical small squares in the four corners of the cardboard:

//        _______________
//   cut  |             |  cut
//  ______| . . . . . . |______
// |      .             .      |
// |      .             .      |
// |      .             .      |
// |______ . . . . . . . ______|
//        |             |
//   cut  |_____________|  cut
// Then the four protruding parts are folded upwards at the dotted lines, and a rectangular cup is made.

// Task
// Complete function that accepts an argument n (an integer > 4) and returns the maximum possible volume of the cup.

// Note: the length of the small square must be an integer.

// Examples
// 5  -->   9    #  = 3 * 3 * 1
// 6  -->  16    #  = 4 * 4 * 1
// 7  -->  25    #  = 5 * 5 * 1
// 8  -->  36    #  = 6 * 6 * 1
// 9  -->  50    #  = 5 * 5 * 2
// 10 -->  72    #  = 6 * 6 * 2
// 20 --> 588    #  = 14 * 14 * 3

// My solution

function maximumVolume(n){
  let maxVolume = 0;
  for(let x = 1; x < n / 2; x++){
    let volume = x * Math.pow(n - 2 * x, 2);
    if(volume > maxVolume){
      maxVolume = volume;
    }
  }
  return maxVolume;
  }