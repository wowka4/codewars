/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.*/
// Solution:

function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (alphabet.includes(text[i].toLowerCase())) {
            let num = alphabet.indexOf(text[i].toLowerCase()) + 1;
            result = `${result}${num} `;
        }
    }
    return result.slice(0, -1);
}

console.log(alphabetPosition('Hello!'));