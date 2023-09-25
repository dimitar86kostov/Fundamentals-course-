function evenAndOddSubtraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;

    for (const el of arr) {
        if (el % 2 === 0) {
            sumEven += el
        } else {
            sumOdd += el
        }
    }
   console.log(sumEven - sumOdd) 
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
evenAndOddSubtraction([3,5,7,9])