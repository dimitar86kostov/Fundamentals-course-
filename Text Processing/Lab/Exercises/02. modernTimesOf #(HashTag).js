function modernTimesOfHashTag(text) {

    let arr = text.split(' ');
    
    while (true) {
        let isValid = true;
        let word = arr.shift();
        if (word == undefined) {
            break;
        }
        if (word.startsWith('#')) {
            if (word.length > 1) {
                word = word.substring(1, word.length)

                for (const letter of word) {
                    if (letter.charCodeAt(0) > 122 || letter.charCodeAt(0) < 97 && letter.charCodeAt(0) > 90 || letter.charCodeAt(0) < 65) {
                        isValid = false;
                        break;
                    }
                }
                if (isValid) {
                    console.log(word);
                }

            }
        }
    }
}
modernTimesOfHashTag('The symbol # is known #variously in #english-speaking #regions as the #number sign')