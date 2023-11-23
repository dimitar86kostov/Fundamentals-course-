let arr = [10, 20, 30, 40, 50];

console.log(map(arr, x => x * 2)); // with arrow function

function map(inputArr, operation) {
    let transformed = [];

    for (const item of inputArr) {
        let newItem = operation(item);
        transformed.push(newItem);
    }
    return transformed;
}

console.log(arr.map(increment)); //without arrow function

function increment(x) {
    return x * 2;
}




