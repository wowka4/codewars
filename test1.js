const num = 1234;

const a = n => n.toString(2).replaceAll('0', '');

console.log(a(num));