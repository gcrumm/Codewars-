// Description:
// Input
// Parameter 1: An HTML markup enclosed by the back-ticks (` `), for example:


// Note that HTML tags may contain attributes.

// Parameter 2: A string representing an HTML tag name, for example: 'h2'
// Because parsing actual HTML is very complex, you can assume the following:

// there will be no angled brackets inside quoted attributes; e.g. don't worry about things such as <tag attribute="></tag>">innerText</tag>
// the tags specified by the second parameter will never contain nested tags, only inner text.
// Output
// An array of strings which represents the contents between the opening and closing tag specified by the 2nd parameter.

// Note that contents may be present on multiple lines. Remove the newline and whitespace characters from both sides of the string.

// An empty array should be returned if a given tag is not found.

// Examples
// getTagContent(htmlString1, 'h1') --> ["Nature's Wonders"]
// getTagContent(htmlString1, 'h2') --> ["Birds","Butterflies"]
// getTagContent(htmlString1, 'p') -->
// [
//   "In this article we discuss animals.",
//   "Forest is a wonderful place to see birds.",
//   "Butterflies possess some of the most striking colour displays found in nature."
// ]
// getTagContent(htmlString1, 'h3') --> []

function getTagContent(html, tag) {
  const result = [];

  const open = `<${tag}`;
  const close = `</${tag}>`;

  let start = 0;

  while (true) {
    const openIndex = html.indexOf(open, start);
      if (openIndex === -1) break;
    
    const openEnd = html.indexOf('>', openIndex)
      if(openEnd === - 1) break;

    const contentStart = openEnd + 1;

    const closeIndex = html.indexOf(close, contentStart);
      if (closeIndex === -1) break;

    result.push(html.slice(contentStart, closeIndex).trim());

    start = closeIndex + close.length;
  }

  return result;
}