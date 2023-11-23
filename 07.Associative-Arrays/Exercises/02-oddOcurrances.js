function oddOccurrences(input) {
    let map = new Map();
    let tokens = input.split(' ');
    let count = 1;

    for (const el of tokens) {
        let token = el.toLowerCase();

        if (!map.has(token)) {
            map.set(token, count)
        } else {
            let currCount = map.get(token);
            let newCount = currCount + count;
            map.set(token, newCount);
        }
    }
    let result = [];

    for (const entry of map) {
        if (entry[1] % 2 !== 0) {

            result.push(entry[0]);
        }
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')