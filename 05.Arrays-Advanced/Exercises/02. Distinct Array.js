function distinctArray(array) {
    let uniqueNums = [];

    for (const el of array) {
        if (!uniqueNums.includes(el)) {
            uniqueNums.push(el);
        }
    }

console.log(uniqueNums.join(' '));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([2, 2])
distinctArray([1, 2, 3, 4, 5])