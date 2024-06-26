/*A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/
//Solution:

function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const length = alphabet.length;
    let arr = [];
    for (let i = 0; i < string.length; i++){
        if (alphabet.includes(string[i].toLowerCase())) {
            if (!arr.includes(string[i].toLowerCase())){
                arr.push(string[i].toLowerCase());
            }
        }
    }
    return arr.length === length;
}

const string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));