function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numStr = String(number);

function odd() {
    for (let i = 0; i < numStr.length; i++) {
         if (numStr[i] % 2 !== 0) {
            oddSum += Number(numStr[i]);
         }
    }
    return oddSum;
}
function even() {
    for (let i = 0; i < numStr.length; i++) {
         if (numStr[i] % 2 === 0) {
            evenSum += Number(numStr[i]);
         }
    }
    return evenSum;
}
let totalOdd = odd(number);
let totalEven = even(number);

console.log(`Odd sum = ${totalOdd}, Even sum = ${totalEven}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);