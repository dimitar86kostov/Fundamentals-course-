function bombNumbers(seq, detonator) {

    let bomb = detonator[0];
    let power = detonator[1];
    let sum = 0;

    for (let i = 0; i < seq.length; i++) {
        const element = seq[i];

        if (element === bomb) {
            
            seq.splice(Math.max(i - power, 0), i + power, 0);
        }
    }
    for (const el of seq) {
        sum += el;
    }
    console.log(sum);
}
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNumbers([1,2,3,7,6,5,3,9,8,7], [3,2])