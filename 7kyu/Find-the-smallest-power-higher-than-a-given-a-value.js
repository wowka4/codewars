/*We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.
Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number.
The value will be 1419857.
We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell),
that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.

Let'see some cases:

findNextPower(12385, 3) == 13824*/

// Solution:

function findNextPower(val, pow_) {
    if (val === 1) return 2 ** pow_;
    for (let i = 1; i <= val; i++) {
        if (i ** pow_ > val) return i ** pow_;
    }
}

console.log(findNextPower(12385, 3));