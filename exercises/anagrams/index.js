// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const charMapper = (string) => {
//     let compareObj = {};
//     for(const char of string.replace(/[^\w]/g, "").toLowerCase()) {
//       compareObj[char] = compareObj[char] + 1 || 1
//     }
//     return compareObj
//   }
//   const charMap1 = charMapper(stringA);
//   const charMap2 = charMapper(stringB);
//   if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
//     return false
//   } 
//   return stringA.split('').every((char) => charMap1[char] === charMap2[char])
// }

// function anagrams(stringA, stringB) {
//   return sorter(stringA) === sorter(stringB);
// }

// function sorter(string) {
//   return string.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
// }



function anagrams(stringA, stringB) {
  stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB.replace(/[^\w]/g, '').toLowerCase();

  return stringA.split('').sort().join('') === stringB.split('').sort().join('');
}



















module.exports = anagrams;
