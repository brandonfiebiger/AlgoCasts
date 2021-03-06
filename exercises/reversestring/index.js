// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let reversedWord = [];
//   for(let i = str.length -1; i >= 0; i--) {
//     reversedWord.push(str[i]);
//   }
//   return reversedWord.join('')
// }

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// function reverse(str) {
//   let reversed = '';

//   for (const char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   return str.split('').reduce((reversed, char) => char + reversed, '')
// }




// function reverse(str) {
//   let newString = [];

//   for (let i = str.length; i >= 0; i--) {
//     newString.push(str[i])
//   }

//   return newString.join('');
// }

function reverse(str) {
  return str.split('').reduce((reversedString, char) => char + reversedString, '')
}

module.exports = reverse;
