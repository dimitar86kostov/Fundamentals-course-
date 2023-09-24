function binaryToDecimal(code) {
    let codeStr = String(code);
    let sum = 0;

    for (let i = 0; i < codeStr.length + 1; i++) {
        const element = Number(codeStr[i]);
        
        if (i > 0) {
           
            if (i === codeStr.length - 1) {
                break;
                
            }else{
                sum = sum * 2 + Number(codeStr[i + 1]);
            }
        } else {
            sum += element * 2 + Number(codeStr[i + 1]);
        }
    }
console.log(sum);
}
binaryToDecimal(11110000) //240
binaryToDecimal(1100)
binaryToDecimal(1101)
binaryToDecimal(1110)
binaryToDecimal(1111)