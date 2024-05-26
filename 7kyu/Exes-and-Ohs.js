/*Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

function XO(str) {
    const array = str.toLowerCase().split('');
    let countX = 0;
    let countO = 0;
    for (const char of array) {
        if (char === 'x') countX++;
        if (char === 'o') countO++;
    }
    return countX === countO;
}

console.log(XO('zzppp'));