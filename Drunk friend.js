// Description:
// You're hanging out with your friends in a bar, when suddenly one of them is so drunk, that he can't speak, and when he wants to say something, he writes it down on a paper. However, none of the words he writes make sense to you. He wants to help you, so he points at a beer and writes "yvvi". You start to understand what he's trying to say, and you write a script, that decodes his words.

// Keep in mind that numbers, as well as other characters, can be part of the input, and you should keep them like they are. You should also test if the input is a string. If it is not, return "Input is not a string".

// My solution

function decode(str) {
  if(typeof str !== 'string') return "Input is not a string";
  let result = '';
  for(let char of str){
    if(char >= 'a' && char <= 'z'){
      result += String.fromCharCode(219 - char.charCodeAt(0));
    }else if(char >= 'A' && char <= 'Z'){
        result += String.fromCharCode(155 - char.charCodeAt(0));
      }else{
        result += char;
      }
    }
    return result;
  }