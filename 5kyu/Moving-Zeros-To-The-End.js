/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order
of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
// Solution:
function moveZeros(arr) {
  const newArr = arr.filter((item) => item !== 0);
  const zeros = arr.filter((item) => item === 0);
  return [...newArr, ...zeros];
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));