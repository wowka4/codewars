/*Task
You will be given an array of numbers. You have to sort the odd numbers in ascending 
order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          if (arr[j] % 2 !== 0) {
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }
        }
      }
    }
  }
  return arr;
}

console.log(
  sortArr([
    24, -43, -21, -29, 8, -18, -37, -22, 50, -8, -43, -9, -13, 9, 19, 19, 2, 29,
    34, -32, -50, 35, -30, 0, 0,
  ])
);
