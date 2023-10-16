function bombNumbers(seq, detonator) {

    let bomb = detonator[0];
    let power = detonator[1];
    let sum = 0;

    while (seq.includes(bomb)) {
        for (let i = 0; i < seq.length; i++) {
            const element = seq[i];

            if (element === bomb) {

                seq.splice(Math.max(i - power, 0), power * 2 + 1, 0); //последната 0 е за запазване на индекса
                break;
            }
        }
    }
    // for (const el of seq) { // това работи и без запазването на индекса
    //     sum += el;
    // }
    // console.log(sum);

    console.log(seq.reduce((acc, value) => acc + value)); // това не работи без запазване на индекса
}


bombNumbers([1, 2, 1, 1], [2, 3])
bombNumbers([1, 4, 4, 2, 8, 9, 1], [2, 3])