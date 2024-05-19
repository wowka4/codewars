// Description
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
// Otherwise, you can be sure he's not...
// ✅ Example :
// Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// Solution:
function solution(friends) {
    const newArr = [];
    for (const f of friends) {
        if (f.length === 4) {
            newArr.push(f);
        }
    }
    return newArr;
}

function solution2(friends) {
    return friends.filter((f) => f.length === 4);
}

console.log(solution(["Ryan", "Kieran", "Jason", "Yous"])) // Should be: ["Ryan", "Yous"]
console.log(solution(["Ryan", "Kieran", "Mark"])); // Should be: ["Ryan", "Mark"]

console.log(solution2(["Ryan", "Kieran", "Jason", "Yous"])); // Should be: ["Ryan", "Yous"]
console.log(solution2(["Ryan", "Kieran", "Mark"])); // Should be: ["Ryan", "Mark"]
