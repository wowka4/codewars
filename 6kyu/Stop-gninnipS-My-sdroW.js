/*Write a function that takes in a string of one or more words, and returns the same string,
but with all words that have five or more letters reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when
more than one word is present.
Examples:
"Hey fellow warriors"  --> "Hey wollef sroirraw"
"This is a test        --> "This is a test"
"This is another test" --> "This is rehtona test"*/
// Solution:
function spinWords(string){
   const words = string.split(' ');
   for (let i = 0; i < words.length; i++){
       if (words[i].length > 4) {
           words[i] = words[i].split('').reverse().join('')
       }
   }
   return words.join(' ');
}

function spinWords1(string){
    const words = string.split(' ');
    const result = [];
    words.filter((word) => word.length > 4 ? result.push(word.split('').reverse().join('')) : result.push(word));
    return result.join(' ');
}

console.log(spinWords1("Hey fellow warriors"));