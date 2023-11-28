function emojiDetector([str]) {

    let emojis = [];
    let treshold = 0;
    let treshPattern = /\d/g;
    let tresh = str.match(treshPattern);
    if (tresh) {
        treshold = tresh.reduce((a, b) => a * b,);
    }
    let pattern = /(::|\*\*)(?<coolest>[A-Z][a-z]{2,})\1/g;

    let match = pattern.exec(str);
    let count = 0;

    while (match != null) {
        count++
        let sum = 0;

        for (const el of match[2]) {
            sum += el.charCodeAt();
        }

        if (treshold <= sum) {
            emojis.push(match[0]);
        }

        match = pattern.exec(str);
    }

    console.log(`Cool threshold: ${treshold}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);

    for (const emoji of emojis) {
        console.log(emoji);
    }

}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);