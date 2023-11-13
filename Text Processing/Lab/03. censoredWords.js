function censoredWords(text, word) {
    let censored = '*'.repeat(word.length);
    let result = text;

    while (result.includes(word)) {
        result = result.replace(word, censored)
    }
    console.log(result);
}
censoredWords('A small sentence with some words', 'small')