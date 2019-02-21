// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



const maxChar = (str) => {

  let checkObj = {};
  let max = 0;
  let result;

  for (let char of str) {
    checkObj[char] ? checkObj[char]++ : checkObj[char] = 1;
    if (checkObj[char] > max) {
      max = checkObj[char];
      result = char;
    }
  }
    return result;
}






















// function maxChar(str) {
//   let chars = {};
//   for(const char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }
//   let result = Object.keys(chars)[0];
//   Object.keys(chars).forEach(char => {
//     if(chars[char] > chars[result]) {
//       result = char;
//     }
//   })
//   return result;
// }

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';
//   for(const char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
  
//   for(let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }



// function maxChar(str) {
//   let chars = {};

//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1
//   }

//   let counter = 0;
//   let max = ''
  
//   for (let char in chars) {
//     if(chars[char] > counter) {
//       counter = chars[char];
//       max = char
//     }
//   }

//   return max;
// }





module.exports = maxChar;
