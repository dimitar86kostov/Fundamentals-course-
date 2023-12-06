function messageDecrypter(params) {

    let pattern = /^(%|\$)(?<tag>[A-Z][a-z]{2,})\1:\ \[(?<first>\d+)]\|\[(?<second>\d+)]\|\[(?<third>\d+)]\|$/gm

    let n = params.shift();

    for (const line of params) {

        let match = pattern.exec(line);


        let msg = '';

        if (match != null) {

            let { first, second, tag, third } = match.groups;

            msg += String.fromCharCode(first);
            msg += String.fromCharCode(second);
            msg += String.fromCharCode(third);

            console.log(`${match[2]}: ${msg}`);

        } else {
            console.log("Valid message not found!");
        }
    }
}
messageDecrypter((["4",
    "$ReqfhafRhwrhhtrhjjrt$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])
);
messageDecrypter((["3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"])
)