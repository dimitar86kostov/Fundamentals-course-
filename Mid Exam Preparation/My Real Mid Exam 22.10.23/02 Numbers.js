function numbers(params) {

    let seq = params.shift().split(' ').map(Number);
    let [comm, value, replacement] = params.shift().split(' ');

    while (comm !== 'Finish') {
        value = Number(value);

        if (comm == 'Add') {
            seq.push(value);

        } else if (comm == 'Remove') {

            if (seq.includes(value)) {
                
                seq.splice(seq.indexOf(value), 1);
            }

        } else if (comm == 'Replace') {
            replacement = Number(replacement);
            if (seq.includes(value)) {
                
                seq.splice(seq.indexOf(value), 1, replacement);
            }

        } else if (comm == 'Collapse') {
            seq = seq.filter(x => x >= value);
        }

        [comm, value, replacement] = params.shift().split(' ');
    }

    console.log(seq.join(' '));
}

numbers(["1 4 5 19",
    "Add 1",
    "Remove 4",
    'Collapse 5',
    "Finish"]);
// numbers(["5 9 70 -56 9 9",
//     "Replace 9 10",
//     "Remove 9",
//     "Finish"])
//     numbers(["1 20 -1 10",
//     "Collapse 8",
//     "Finish"])
    

