function reverseAnArrayOfNumbers(n, arr) {

    let newArr = arr.reverse(n)
    let buff = '';
    for (let i = newArr.length - 1; i >= (newArr.length - n); i--) {
        buff += `${newArr[i]} `

    }
    console.log(buff);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
console.log('---');
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
console.log('---');
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])