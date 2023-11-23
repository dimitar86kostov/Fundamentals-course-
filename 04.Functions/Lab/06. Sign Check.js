function signCheck(num1, num2, num3) {
    let totalNegative = 0;
    if (isNegative(num1)) {
        totalNegative++
    }
    if (isNegative(num2)) {
        totalNegative++
    }
    if (isNegative(num3)) {
        totalNegative++
    }
    if (totalNegative % 2 == 0) {
        return "Positive"
    } else {
        return 'Negative'
    }
    function isNegative(number) {
        return number < 0
    }
}
console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));