/*Task:
You have to create a function isPronic to check whether the argument passed is a
Pronic Number and return true if it is & false otherwise.
Description:
Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number,
is a number which is the product of two consecutive integers, that is, n(n + 1).
*/
// Solution:
function isPronic(n){
    const abs = Math.abs(n);
    for (let i = 0; i <= abs / 2; i++) {
        if (i * (i + 1) === abs) return true;
    }
    return false;
}

console.log(isPronic(0));