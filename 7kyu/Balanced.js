function balancedNum(number)
{
    if (number.toString().length === 1) return "Balanced";
    const str = number.toString();
    let l = 0;
    let leftSum = 0;
    let r = str.length - 1;
    let rightSum = 0;
    let middle = Math.floor(number.toString().length / 2);
    if (str.length % 2 === 0) {
        while(l < middle - 1 && r > middle) {
            leftSum += parseInt(str[l]);
            rightSum += parseInt(str[r]);
            ++l, --r;
        }
    } else {
        while(l < middle && r > middle) {
            leftSum += parseInt(str[l]);
            rightSum += parseInt(str[r]);
            ++l, --r;
        }
    }
    return leftSum === rightSum ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(295591));
console.log(balancedNum(56239814));
console.log(balancedNum(7));