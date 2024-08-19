/*Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Good Luck! */

function convertHashToArray(hash) {
  const arr = [];
  const entries = Object.entries(hash);
  for ([key, value] of entries) {
    const newArr = [key, value];
    arr.push(newArr);
  }
  return arr;
}

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
);
