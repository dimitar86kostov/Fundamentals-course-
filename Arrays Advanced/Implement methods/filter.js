let arr = [13, 20, 35, 40, 50];

console.log(filter(arr, x => x % 2 === 0));
console.log(arr.filter(x => x % 2 !== 0));

function filter(inputArr, predicate) {
    let result = [];

    for (const item of inputArr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}