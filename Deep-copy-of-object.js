function deepCopy(obj) {
    const newObj = {};
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (obj[key] === 'object') {
            deepCopy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let person = {
    name: 'John',
    email: 'john@example.com',
    info: {
        isMarried: true,
        hasChild: false,
        hasCar: false,
    }
};

const newPerson = deepCopy(person);
console.log(person === newPerson);