function simpleCalculator(n1, n2, operand) {

    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;

    let result = 0

    switch (operand) {
        case 'multiply':
            result = multiply(n1, n2);
            break;
        case 'divide':
            result = divide(n1, n2);
            break;
        case 'add':
            result = add(n1, n2);
            break;
        case 'subtract':
            result = subtract(n1, n2);
            break;
    }

    console.log(result);

}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');
