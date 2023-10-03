function smallestOfThreeNumbers(num1, num2, num3) {

    if (isSmallest1(num1, num2, num3)) {
        console.log(num1);
    }else if (isSmallest2(num1, num2, num3)) {
        console.log(num2);
    }else if (isSmallest3(num1, num2, num3)) {
        console.log(num3);
    }

    function isSmallest1(number1, number2, number3) {
        return number1 <= number2 && number1 <= number3;
    }
    function isSmallest2(number1, number2, number3) {
        return number2 <= number1 && number2 <= number3;
    }
    function isSmallest3(number1, number2, number3) {
        return number3 <= number2 && number3 <= number1;
    }
}
smallestOfThreeNumbers(2,
    5,
    3)
smallestOfThreeNumbers(600,
    342,
    123)