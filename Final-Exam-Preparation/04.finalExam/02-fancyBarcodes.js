function fancyBarcodes(params) {
    let n = params.shift();

    let pattern = /@#+[A-Z][a-zA-Z\d]{4,}[A-Z]@#+/g;
    let digitsFinder = /\d/g

    for (const line of params) {

        let str = line.match(pattern)

        if (str) {
            let digits = str[0].match(digitsFinder)
            if (digits) {

                let result = digits.reduce((a, b) => a + b)
                console.log(`Product group: ${result}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
fancyBarcodes((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
);
fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
)