function postOffice([params]) {

    let [firstPart, secondPart, thirdPart] = params.split('|');

    let firstPattern = /[#$%*&][A-Z]+[#$%*&]/gm;
    let secondPattern = /\d+:\d+/g;
    let caplLetters = '';
    let validAscii = {};
    let wordsLen = {};

    let firstMsg = firstPart.match(firstPattern);
    let secondMsg = secondPart.match(secondPattern);
    let thirdMsg = thirdPart.split(' ');
    thirdMsg.forEach(word => wordsLen[word[0]] = word.length);

    if (firstMsg) {
        let cap = firstMsg.toString();
        caplLetters = cap.slice(1, cap.length - 1);
    }
    if (secondMsg) {
        for (const capLetter of caplLetters) {

            for (const el of secondMsg) {
                let [code, len] = el.split(':');
                len = Number(len) + 1;
                let codeLetter = String.fromCharCode(code)
                if (capLetter == codeLetter) {

                    if (codeLetter in wordsLen && wordsLen[codeLetter] == len) {
                        
                        validAscii[codeLetter] = len;
                        secondMsg.splice(secondMsg.indexOf(el), 1);
                        break;
                    }
                }
            }
        }
    }
    for (const word of thirdMsg) {
        if (word[0] in validAscii && word.length == validAscii[word[0]]) {
            console.log(word);
        }
    }
}
// postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'])
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])
