function wordTracker(arr) {
    let obj = {};
    let wantedWords = arr.shift().split(' ');
    let count = 1;

    for (let i = 0; i < wantedWords.length; i++) {
        const currWord = wantedWords[i];

        for (const word of arr) {
    
            if (currWord == word) {
                if (!obj.hasOwnProperty(word)) {
                    obj[word] = count
                } else {
                    obj[word] += count
                }
            }
        }
    }
    let sorted = Object.entries(obj);
    sorted.sort((a, b) => b[1] - a[1]);
    for (const el of sorted) {
        console.log(`${el[0]} - ${el[1]}`);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])