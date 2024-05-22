/*Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic
series explained above. When n < 0 return the sequence with negative terms.

Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]*/

// Solution:
const sumOfN = n => {
    const arr = []
    let sum = 0

    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            sum += i
            arr.push(sum)
        }
    } else {
        for (let i = 0; i >= n; i--) {
            sum += i
            arr.push(sum)
        }
    }

    return arr
}

console.log(sumOfN(5)); // [0,  1,  3,  6,  10,  15]