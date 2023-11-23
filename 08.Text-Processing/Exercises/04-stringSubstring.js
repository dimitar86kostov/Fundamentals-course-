function stringSubstring(word, text) {

    let splitedText = text.toLowerCase().split(' ');

    let result = splitedText.filter(el => el == word)

    if (result.length > 0) {
        console.log(result.join());
    } else {
        console.log(`${word} not found!`);
    }

    // if (splitedText.includes(word)) {
    //     console.log(word);
    // }else{
    //     console.log(`${word} not found!`);
    // }
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
)