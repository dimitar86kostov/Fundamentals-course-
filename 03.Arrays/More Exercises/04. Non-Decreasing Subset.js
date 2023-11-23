function nonDecreasingSubset(array) {
    let max = Number.MIN_SAFE_INTEGER;
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= max) {
            max = element;
            newArr.push(max)
        }
    }
console.log(newArr.join(' '));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);