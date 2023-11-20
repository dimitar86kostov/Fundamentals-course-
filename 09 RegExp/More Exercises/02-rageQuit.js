function rageQuit(input) {

    let wordPattern = /[^0-9]+/g;
    let digitPattern = /[0-9]+/g;
    let rage = '';
    let unique = '';

    let matchChars = input.match(wordPattern);
    let matchDdigits = input.match(digitPattern);
    if (matchChars && matchDdigits) {

        for (let i = 0; i < matchChars.length; i++) {
            let str = matchChars[i].toString();
            let result = '';

            for (const el of str) {
                let char = el.toUpperCase();
                result += char;
                if (!unique.includes(char)) {
                    unique += char;
                }
            }
            rage += result.repeat(matchDdigits[i])
        }
    } 

    console.log(`Unique symbols used: ${unique.length}`);
    console.log(rage);
}
rageQuit('a3')
rageQuit('aSd2&5s@1')