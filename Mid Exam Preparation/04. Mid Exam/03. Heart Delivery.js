function heartDelivery(arr) {
    let neighborhood = arr
        .shift()
        .split('@')
        .map(Number);
    let [command, index] = arr.shift().split(' ');
    let jump = 0;

    while (command !== 'Love!') {
        index = Number(index);
        jump += index;

        if (neighborhood.length <= jump) {
            jump = 0;
        }

        if (neighborhood[jump] !== 0) {
            neighborhood[jump] -= 2;

            if (neighborhood[jump] === 0) {
                console.log(`Place ${jump} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${jump} already had Valentine's day.`);
            ;
        }
        [command, index] = arr.shift().split(' ');
    }

    console.log(`Cupid's last position was ${jump}.`);

    neighborhood = neighborhood.filter((x) => x > 0)

    if (neighborhood.length === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${neighborhood.length} places.`);
    }

}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
// heartDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"])
