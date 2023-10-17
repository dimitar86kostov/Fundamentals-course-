function memoryGame(input) {
    let seq = input
        .shift()
        .split(' ');
    let copy = seq.slice();
    let moves = 0;
    for (let i = 0; i < copy.length; i++) {
        moves++;

        let [leftIdx, rightIdx] = input[i].split(' ');

        if (leftIdx === 'end') {
            break;
        } else if (seq.length < 1) {
            console.log(`You have won in ${i} turns!`);
            break;
        }
        if (seq[leftIdx] == seq[rightIdx]) {
            console.log(`Congrats! You have found matching elements - ${seq[leftIdx]}!`);
            seq.splice(leftIdx, 1);
            seq.splice(Math.max(rightIdx - 1, 0), 1);

        } else if (leftIdx > seq.length || rightIdx > seq.length
            || leftIdx < 0 || rightIdx < 0) {
            console.log('Invalid input! Adding additional elements to the board');
            seq.splice(Math.floor(seq.length / 2), 0, `-${moves}` + 'a');
            seq.splice(Math.floor(seq.length / 2), 0, `-${moves}` + 'a');
        } else {
            console.log('Try again!');
        }
    }


    if (seq.length > 1) {
        console.log(`Sorry you lose :(`);
        console.log(`${seq.join(' ')}`);
    }
}


memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
console.log('-------');
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
);
console.log('-------');
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
