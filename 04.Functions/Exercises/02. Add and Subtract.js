function addAndSubtract(n1, n2, n3) {
    let sum = (num1, num2) => num1 + num2;
    let result = sum(n1, n2);

    function subtract(num3) {
        return result - num3;
    }
    let finalResult = subtract(n3)

    console.log(finalResult);
}
addAndSubtract(23,
    6,
    10)