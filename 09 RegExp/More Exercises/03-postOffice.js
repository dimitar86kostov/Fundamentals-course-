function postOffice(params) {

    let arr = params.split('|');
    let mainLetters = '';
    let secondPart = [];
    let words = [];

    for (let i = 0; i < arr.length; i++) {
        let msg = arr[i];

        if (i == 0) {
            let firstPattern = /[#$%*&][A-Z]+[#$%*&]/gm;
            let match = msg.match(firstPattern);
            if (match) {
                let caplLetters = match.toString();
                mainLetters = caplLetters.slice(1, caplLetters.length - 1);
            }
        } else if (i == 1) {
            let secondPattern = /\d+:\d+/g;
            let match = msg.match(secondPattern);

            if (match) {
                for (const el of match) {
                    let [code, len] = el.split(':');
                    let currLetter = String.fromCharCode(code);
                    if (mainLetters.includes(currLetter)) {
                        secondPart.push(el);
                    }
                }
            }
        } else if (i == 2) {
            words = msg.split(' ');
        }
    }

    for (const el of secondPart) {
        let [code, len] = el.split(':');
        let currLetter = String.fromCharCode(code);
        len = Number(len) + 1;

        for (const word of words) {
            if (word[0] == currLetter && word.length == len) {
                console.log(word);
                words.splice(words.indexOf(word), 1)
                break;
            }
        }
    }

}
// postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos')
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig')

