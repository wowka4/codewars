/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/
//Solution:

const str = "bitcoin take over the world maybe who knows perhaps";


function findShort(s){
    return s.split(' ').reduce((a, b) => a.length > b.length ? b : a).length;
}

console.log(findShort(str)); // 3