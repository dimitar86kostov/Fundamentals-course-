function hardWord(input) {
    let mainText = input[0];
    let text = input[0].split('.');
    let arr = input[1];

    for (const sentence of text) {
        let words = sentence.split(' ');
        let len = 0;

        for (const word of words) {
            if (word.includes('_')) {
let fixedWord = '';
                if (word.includes('.')) {
                    fixedWord = word.slice(word.length - 1)
                } else if (word.includes(',')) {
                    fixedWord = word.slice(0, word.length - 1)
                } else{
                    fixedWord = word;
                }
                

                for (const el of arr) {
                    if (el.length == fixedWord.length) {
                        mainText = mainText.replace(fixedWord, el);
                    }
                }
            }
        }
    }
console.log(mainText);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)