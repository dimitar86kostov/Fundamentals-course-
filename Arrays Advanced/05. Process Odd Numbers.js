function processOddNumbers(array) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            const element = array[i] * 2;
            arr.push(element)
        }
    }
    console.log(arr.reverse().join(' '));

/*
    let result = array
    .filter((x, i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse();
    console.log(result.join(' '));
*/
}
processOddNumbers([3, 0, 10, 4, 7, 3])