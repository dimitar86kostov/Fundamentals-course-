function treasureHunt(params) {

    let chest = params
        .shift()
        .split('|');
    let element = params.shift();

    while (element !== 'Yohoho!') {

        let treasures = element.split(' ');
        let command = treasures.shift();

        if (command == 'Loot') {
            treasures
                .filter(item => !chest.includes(item))
                .forEach(item => chest.unshift(item));

        } else if (command == 'Drop') {
            let index = Number(treasures.shift());
            if (index >= 0 && index < chest.length) {

                let spliced = chest.splice(index, 1).shift();
                chest.push(spliced);
            }
        } else if (command == 'Steal') {
            let stolen = chest.splice(-treasures);
            console.log(stolen.join(', '));
        }

        element = params.shift();
    }

    if (chest.length == 0) {
        console.log('Failed treasure hunt.');
    } else {
        let average = chest.reduce((a, b) => a + b.length, 0) / chest.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
