function mirrorWords([params]) {

    let validPairsPatt = /@[a-z]{3,}@@[a-z]{3,}@|#[a-z]{3,}##[a-z]{3,}#/gi;
    let mirrorW = [];

    let validPairs = params.match(validPairsPatt);

    if (validPairs) {

        console.log(`${validPairs.length} word pairs found!`);

        for (const pair of validPairs) {
            let devider = pair.length / 2

            let firstPart = pair.slice(1, devider - 1);
            let secondPart = pair.slice(devider + 1, pair.length - 1);
            let arr = secondPart.split('');
            let reversed = arr.reverse();
            let result = reversed.join('');

            if (firstPart == result) {
                mirrorW.push(`${firstPart} <=> ${secondPart}`)

            }
        }
    } else {
        console.log('No word pairs found!');
    }



    if (mirrorW.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorW.join(', '));
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])