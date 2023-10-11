let arr = [10, 20, 30, 40, 50];

console.log(slice(arr, 1, 3));

function slice(inputArr, start, end) {
    let result = [];

    if (start < 0) {
        start += inputArr.length;
    }
    if (end < 0) {
        end += inputArr.length;
    }

    for (let i = start; i < end; i++) {
        result.push(inputArr[i]);
    }
    return result;
}