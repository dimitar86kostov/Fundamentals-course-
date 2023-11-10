function cardGame(arr) {
    let assocArr = {};
    let mainObj = [];

    for (const player of arr) {
        let [person, draw] = player.split(': ');

        if (!mainObj.hasOwnProperty(person)) {
            mainObj[person] = draw;
        } else {
            let newValue = mainObj[person] + `, ${draw}`;
            mainObj[person] = newValue;
        }
    }

    for (const player in mainObj) {
        let draw = mainObj[player];
        let result = 0;
        let cards = draw.split(', ');
        
        while (cards.length > 0) {
            let currCard = cards[0];
            let [power, type, ifHas] = cards.shift();
            if (ifHas) {
                power = power + type;
                type = ifHas;
            }

            if (isNaN(power)) {
                switch (power) {
                    case 'J':
                        power = 11;
                        break;
                    case 'Q':
                        power = 12;
                        break;
                    case 'K':
                        power = 13;
                        break;
                    case 'A':
                        power = 14;
                        break;
                }
            }
            switch (type) {
                case 'S':
                    type = 4;
                    break;
                case 'H':
                    type = 3;
                    break;
                case 'D':
                    type = 2;
                    break;
                case 'C':
                    type = 1;
                    break;
            }
            if (!cards.includes(currCard)) {

                result += Number(power) * type
                assocArr[player] = result;
            }
        }
    }
    let entries = Object.entries(assocArr);
    for (const entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)