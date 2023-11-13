function revealWords(words, sentence) {
    words = words.split(', ');
    let result = sentence;

    for (const el of words) {
        let template = '*'.repeat(el.length)
        result = result.replace(template, el);
    }

    console.log(result);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)