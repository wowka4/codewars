/*The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

const maxSequence = (arr) => {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([]));
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, 5, -1]));
console.log(
  maxSequence([
    -49, 36, 25, -36, 38, -19, -5, 7, -28, 1, -32, -1, -8, -36, 36, 10, -49, -9,
    -50, 0, -24, -7, 35, 20, 25, -41, 3, -49,
  ])
);
console.log(
  maxSequence([
    -11, -36, 35, 8, -10, 35, -44, 31, -10, 17, 39, -1, 34, 25, -2, 46, -12, 4,
    29, 17, 2, 39, -12, -23, -27, 10, -10, 31, 24, 2, -25, -13, 2, -7, 44, -7,
    23, -47, 5, 8, -1, -38, 49,
  ])
);
