function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let leftEl = arr[i];
        let rightEl = arr[arr.length - 1 - i];

        arr[i] = rightEl;
        arr[arr.length - 1 - i] = leftEl;
    }
    console.log(arr.join(' '));
}

reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])
reverseInPlace(['a', 'b', 'c', 'd', 'e'])