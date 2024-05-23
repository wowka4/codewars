/*Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
For your convenience, the input is formatted such that a space is provided between every token.
Empty expression should evaluate to 0.
Valid operations are +, -, *, /.
You may assume that there won't be exceptional situations (like stack underflow or division by zero).
*/
// Solution:

function calc(expr) {
    if (expr.length === 0) return 0;
    const arr = expr.split(' ');
    const operators = ['/', '*', '-', '+'];
    const stack = [];
    for (const item of arr) {
        if (!operators.includes(item)) {
            stack.push(Number(item));
            continue;
        }
        const a = stack.pop();
        const b = stack.pop();
        let result;
        switch (item) {
            case '*':
                result = a * b;
                break;
            case '/':
                result = b / a;
                break;
            case '+':
                result = a + b;
                break;
            case '-':
                result = b - a;
                break;
            default:
                break;
        }
        stack.push(result);
    }
    return stack.pop();
}

console.log(calc('1 2 + 4 * 3 +')); // 15