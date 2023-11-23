function valueOfAtring(arr) {

    let str = arr.shift();
    let option = arr.pop();
    let isUpper = false;
    let isLower = false;
    let sum = 0;
    if (option[0] == 'U') {
        isUpper = true;
    } else if (option[0] == 'L') {
        isLower = true;
    }

    for (const letter of str) {

        if (isLower) {
            if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
                    sum += letter.charCodeAt(0);   
            } 
        }
        if (isUpper) {
            if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) {
                sum += letter.charCodeAt(0);
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfAtring(['0/]HelloFromMyAwesomePROGRAM',

    'LOWERCASE'])