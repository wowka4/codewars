function repeat(text, count) {
    // BEGIN (write your solution here)
    var result = '';
    for (var i = 0; i < count; i++) {
        result += text;
    }
    return result;
    // END
}
console.log(repeat('Wowka', 2));
