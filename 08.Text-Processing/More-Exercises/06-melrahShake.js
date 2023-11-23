function melrahShake(params) {

    let pattern = params.pop();

    let str = params.toString();
    let matches = 0;

    while (str.includes(pattern)) {
        matches++

        let startIdx = str.indexOf(pattern);
        let endIdx = startIdx + pattern.length;

        let firstPart = str.slice(0, startIdx);
        let secondPart = str.slice(endIdx);
        str = firstPart + secondPart;
    }
if (matches >= 2) {
    
}
}
melrahShake(['astalavista baby',
    'sta']
);
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']
)