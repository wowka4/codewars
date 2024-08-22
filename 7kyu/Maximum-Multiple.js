/*Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0. */

function maxMultiple(divisor, bound) {
  let max = 0;

  for (let i = divisor; i <= bound; i++) {
    if (i % divisor === 0) max = Math.max(max, i);
  }
  return max;
}
