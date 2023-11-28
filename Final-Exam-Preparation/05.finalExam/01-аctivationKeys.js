function activationKeys(params) {

    let raw = params.shift();
    let line = params.shift();

    while (line != 'Generate') {

        let [comm, param1, param2, param3] = line.split('>>>');

        if (comm == 'Slice') {

            let firstPart = raw.slice(0, param1);
            let secondPart = raw.slice(param2, raw.length);
            raw = firstPart + secondPart;
console.log(raw);
        } else if (comm == 'Flip') {
            let firstPart = raw.slice(0, param2);
            let secondPart = raw.slice(param3, raw.length);
            let substring = raw.slice(param2, param3);
            if (param1[0] == 'U') {
                substring = substring.toUpperCase();
            } else if (param1[0] == 'L') {
                substring = substring.toLowerCase();
            }
            raw = firstPart + substring + secondPart;
            console.log(raw);

        } else if (comm == 'Contains') {

            if (raw.includes(param1)) {
                console.log(`${raw} contains ${param1}`);
            } else {
                console.log(`Substring not found!`);
            }
        }

        line = params.shift();
    }
console.log(`Your activation key is: ${raw}`);
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
)
