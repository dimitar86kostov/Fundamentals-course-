function lettersChangeNumbers(input) {
    let arr = [];
    let arrResult = '';

    for (let i = 0; i <= input.length; i++) {
        let el = input[i];
        if (el == ' ' || i == input.length) {
            if (arrResult == '') {
                continue;
            }
            arr.push(arrResult)  
            arrResult = ''; 
        }else{
            arrResult += el;
        }
    }
     
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let totalResult = 0;

    for (const line of arr) {
        let code = line.trim();
        let firstLetter = code[0];
        let secondLetter = code[code.length - 1];
        let num = Number(code.slice(1, code.length - 1));
        let firstIsUpper = false;
        let secondIsUpper = false;
        let result = num;

        if (firstLetter.charCodeAt(0) >= 65 && firstLetter.charCodeAt(0) <= 90) {
            firstIsUpper = true;
        } else {
            firstLetter = firstLetter.toUpperCase();
        }
        if (secondLetter.charCodeAt(0) >= 65 && secondLetter.charCodeAt(0) <= 90) {
            secondIsUpper = true;
        } else {
            secondLetter = secondLetter.toUpperCase();
        }
        
        for (let i = 0; i < alphabet.length; i++) {
            let letter = alphabet[i];
            let position = i + 1;

            if (firstIsUpper) {
                if (firstLetter == letter) {
                    result /= position;
                    break;
                }
            } else {
                if (firstLetter == letter) {
                    result *= position;
                    break;
                }
            }
        }
        for (let i = 0; i < alphabet.length; i++) {
            let letter = alphabet[i];
            let position = i + 1;
            if (secondIsUpper) {
                if (secondLetter == letter) {
                    result -= position;
                    break;
                }
            } else {
                if (secondLetter == letter) {
                    result += position;
                    break;
                }
            }
        }
        totalResult += result;
    }
    console.log(totalResult.toFixed(2));
}
lettersChangeNumbers('P34562Z q2576f   H456z')