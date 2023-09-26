function addAndSubtract(array) {
    let sum = 0;
    let newSum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        if (array[i] % 2 === 0) {
            array[i] += i;
            newSum += array[i];
        } else {
            array[i] -= i;
            newSum += array[i];
        }

    }
console.log(array);
console.log(sum);
console.log(newSum);
    
}
addAndSubtract([5, 15, 23, 56, 35])