function hey(input) {
    function isValidMessage(input) {
        const pattern = /^[$%]([A-Z][a-z]+): \[(\d+)\|(\d+)\|(\d+)\]$/;
        return pattern.test(input);
    }
    
    function decryptMessage(input) {
        const [, tag, group1, group2, group3] = input.match(/^[$%]([A-Z][a-z]+): \[(\d+)\|(\d+)\|(\d+)\]$/);
        const decryptedMessage = String.fromCharCode(group1, group2, group3);
        console.log(`${tag}: ${decryptedMessage}`);
    }
    
    function processInput(input) {
        if (isValidMessage(input)) {
            decryptMessage(input);
        } else {
            console.log("Valid message not found!");
        }
    }
    for (const el of input) {
        processInput(el);
    }
}
hey((["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])
);
hey((["3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"])
)