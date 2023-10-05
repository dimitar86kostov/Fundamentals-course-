function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numStr = String(number);

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] % 2 !== 0) {
           oddSum += Number(numStr[i]);
        }else{
            evenSum += Number(numStr[i]);
        }
   }
/*
function odd(num) {
    for (let i = 0; i < numStr.length; i++) {
         if (numStr[i] % 2 !== 0) {
            oddSum += Number(numStr[i]);
         }
    }
    return oddSum;
}
function even(num) {
    for (let i = 0; i < numStr.length; i++) {
         if (numStr[i] % 2 === 0) {
            evenSum += Number(numStr[i]);
         }
    }
    return evenSum;
}
let totalOdd = odd(n);
let totalEven = even(n);
*/
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);