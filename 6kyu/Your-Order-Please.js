/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */
function order(words) {
   const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
   const map = new Map();
   let l = 0;
   let index = 0;
   for (let i = 0; i < words.length; i++) {
        if (nums.indexOf(words[i]) !== -1) {
            index = nums.indexOf(words[i]);
        }
        if (words[i] === ' ') {
            map.set(index + 1, words.slice(l, i));
            l = i + 1;
        }
        if (i === words.length - 1) {
            map.set(index + 1, words.slice(l));
        }
   }
   let result = '';
   let isFirst = true;
   for (let i = 0; i < map.size; i++) {
        if (isFirst) {
            result += map.get(i + 1);
            isFirst = false;
        } else {
            result += (' ' + map.get(i + 1));
        }
   }
   return result;
   
  }

  const str = '4of Fo1r pe6ople g3ood th5e the2';
  console.log(order(str));
  
