// Description:
// You are building a utility that calculates the total amount of wrapping paper required for a set of rectangular boxes.

// Each box is defined by three integer dimensions: length (l), width (w), and height (h).

// For each box, the required wrapping paper is equal to:

// The surface area of the box
// Plus slack equal to the area of the smallest side
// Input: A list of boxes, where each box is represented as a tuple or object containing three integers (l, w, h).

// Output: A single integer representing the total amount of wrapping paper required for all boxes in the list.

// My solution

function wrappingPaper(boxes) {
  let total = 0;
  for(let i = 0; i < boxes.length; i++){
    let [l, w, h] = boxes[i];
    let lw = l * w;
    let lh = l * h;
    let hw = h * w;
    let small = Math.min(lw, lh, hw);
    let surface = 2 * lw + 2 * lh + 2 * hw;
    total += small += surface;
  }
  return total;
}