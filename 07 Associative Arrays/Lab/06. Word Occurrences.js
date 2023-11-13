function wordOccurrences(arr) {
    let obj = {};
    let count = 1

    for (const word of arr) {

        if (!obj.hasOwnProperty(word)) {
            obj[word] = count;
        } else {
            obj[word] += count;
        }
    }

    let entries = Object.entries(obj);

    entries.sort((a,b) => b[1] - a[1]);   

    for (const entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And", "finally", "the",
    "third", "sentence"])