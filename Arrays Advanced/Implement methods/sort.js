let arr = [13, 20, 35, 40, 50];

console.log(arr);
arr.sort(compare) 
// with arrow function arr.sort((a, b => a - b));

console.log(arr);

function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0
    }
}

