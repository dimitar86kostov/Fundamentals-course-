function starEnigma(params) {

    let n = params.shift();
    let arr = [];

    for (let i = 0; i < n; i++) {
        let decrypt = /[star]/gi;
        let match = params[i].match(decrypt);
        let result = '';
        
        if (match) {
            let key = match.length;
            for (const char of params[i]) {
                let newChar = char.charCodeAt() - key;
                result += String.fromCharCode(newChar);
            }
        } else {
            result = decrypt;
        }
        arr.push(result);
    }
    let pattern = /@(?<planet>[A-Z][a-z]+)[^@\-!:>]*:(?<popu>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
    let atacked = [];
    let destroyed = [];

    for (let msg of arr) {

        let match = msg.match(pattern);
        if (match) {
            let { planet, attackType } = match.groups;

            if (attackType == 'A') {
                atacked.push(planet);
            } else {
                destroyed.push(planet);
            }
        }
    }
    atacked.sort((a, b) => a.localeCompare(b));
    destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${atacked.length}`);

    for (const planet of atacked) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyed.length}`);

    for (const planet of destroyed) {
        console.log(`-> ${planet}`);
    }
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
);
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)