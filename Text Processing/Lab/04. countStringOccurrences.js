function countStringOccurrences(text, word) {

    let result = text.split(' ');
    let count = 0;

    for (const el of result) {
        if (el == word) {
            count++
        }
    }
console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')