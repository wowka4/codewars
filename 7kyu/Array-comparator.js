/*You have two arrays in this kata, every array contains unique elements only.
 Your task is to calculate number of elements in the first array which are also present in
  the second array. */

const matchArrays = (v, r) => v.filter((a) => r.includes(a)).length;

console.log(
  matchArrays(
    ["incapsulation", "OOP", "array"],
    ["time", "propert", "paralelism", "OOP"]
  )
);
