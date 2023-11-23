function asciiSumator(params) {
    let sum = 0;

    let start = params[0].charCodeAt();
    let end = params[1].charCodeAt();
    if (end > start) {

    }

    for (const el of params[2]) {
        let char = el.charCodeAt();

        if (end < start) {
            if (char > end && char < start) {
                sum += char;
            }
        } else {
            if (char > start && char < end) {
                sum += char;
            }
        }
    }
    console.log(sum);
}
asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']
)
asciiSumator(['?',
    'E',
    '@ABCEF']
)
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
)