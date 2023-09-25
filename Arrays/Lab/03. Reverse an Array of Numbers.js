function reverseAnArrayOfNumbers(n, arr) {
    let newArr = [];

    for (let j = 0; j < n; j++) {
        let el = newArr.push(arr[j]);
    }
    let output = newArr.reverse(n)
    let buff = '';

    for (let i = 0; i <= output.length - 1; i++) {
            buff += `${output[i]} `

    }
    console.log(buff);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
console.log('---');
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
console.log('---');
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])