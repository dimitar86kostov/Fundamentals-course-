let arr = [10, 20, 30, 40, 50];

console.log(join(arr, ' --- '));

function join(inputArr, str) {
    let result = '';

    for (let i = 0; i < inputArr.length - 1; i++) {
        result += String(inputArr[i]);
        result += str;
    }
    if (inputArr.length < 0) {
        result += inputArr[inputArr.length - 1];
    }
    return result;
}