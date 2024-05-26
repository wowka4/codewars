/*to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith.
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/
// Solution:
function toJadenCase(str) {
    const strArr = str.split(' ');
    return strArr
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

String.prototype.toJadenCase = function () {
    let args = this;
    const strArr = args.split(' ');
    return strArr
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
};

console.log(toJadenCase('How can mirrors be real if our eyes aren\'t real'));