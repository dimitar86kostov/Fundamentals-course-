function wordTracker(arr) {
    let obj = {};
    let wantedWords = arr.shift().split(' ');
    
    for (const word of wantedWords) {
        obj[word] = 0;
    }

    for (const word of arr) {
        
        if (word in obj) {
            obj[word]++
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