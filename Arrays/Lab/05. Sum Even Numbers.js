function sumEvenNumbers(arr) {
    let sum = 0;
    /*
    for (let i = 0; i < arr.length; i++) {
        let elNum = Number(arr[i]);
        if (elNum % 2 === 0) {
            sum += elNum
        }
    }
    */
    for (const num of arr) {
        let number = Number(num);
        if (number % 2 === 0) {
            sum += number;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])