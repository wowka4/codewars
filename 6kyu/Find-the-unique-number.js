// Description:
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

Examples:
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

Solution:
*/
// slow solution
function solution(arr) {
   for (let i = 0; i < arr.length; i++) {
       let count = 0;
       for (let j = 0; j < arr.length; j++) {
           if (i !== j) {
              if (arr[i] === arr[j]) count++;
           }
       }
       if (count === 0) return arr[i];
   }
}
// faster solution
function solution2(arr) {
    return arr.find((f) => arr.indexOf(f) === arr.lastIndexOf(f));
}

console.log(solution2([ 1, 0, 0 ]));
console.log(solution2([ 0, 0, 0.55, 0, 0 ]));
console.log(solution([ 0, 0, 0, 0, 0, 1 ]));
