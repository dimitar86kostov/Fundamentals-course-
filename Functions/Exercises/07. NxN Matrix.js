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

}
NxNMatrix(7)