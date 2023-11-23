function NxNMatrix(n) {

    for (let row = 1; row <= n; row++) {
        
        let printLine = '';

        function printMatrix() {
            for (let col = 0; col < n; col++) {
                let numStr = String(n)
                printLine += numStr + ' ';
            }
            return printLine;
        }
        console.log(printMatrix(n));
    }

    // for (let rowNum = 0; rowNum < array.length; rowNum++) {
    //     let curRow = `${n} `.repeat(n);
    //     console.log(curRow);
    // }

}
NxNMatrix(7)