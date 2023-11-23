let arr = [13, 8, 35, 90, 10];

console.log(arr);
bubbleSort(arr);
console.log(arr);

// with arrow function arr.sort((a, b => a - b));

function bubbleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (compare(arr[i], arr[i + 1])) {
                swap(arr, i, i + 1)
            }
        }
    }
}

function swap(arr, i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function compare(a, b) {
    return a > b;
}

