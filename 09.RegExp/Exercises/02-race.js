function race(input) {

    let racers = input.shift().split(', ');
    input.pop();
    let obj = {};

    for (const line of input) {
        let regEx = /\w/g;
        let match = regEx.exec(line);
        let score = 0;
        let name = '';

        while (match != null) {

            if (match[0].charCodeAt(0) > 47 && match[0].charCodeAt(0) < 58) {
                score += Number(match[0]);
            } else {
                name += match[0];
            }
            match = regEx.exec(line);
        }
        if (racers.includes(name)) {
            if (obj.hasOwnProperty(name)) {
                obj[name] += score
            } else {
                obj[name] = score
            }
        }
    }
    let entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])