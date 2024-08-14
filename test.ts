function repeat(text: string, count: number) {
    // BEGIN (write your solution here)
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;
    // END
}

console.log(repeat('Wowka', 2));