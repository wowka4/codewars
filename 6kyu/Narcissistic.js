/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves 
to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 */

    function narcissistic(value) {
        // Code me to return true or false
        const n = value.toString().length;
        let sum = 0;
        let nums = value;
        while(nums !== 0) {
            const temp = Math.pow(nums % 10, n);
            nums /= 10;
            nums = Math.floor(nums);
            sum += temp;
        }

        return sum === value;
      }

      console.log(narcissistic(1652));
