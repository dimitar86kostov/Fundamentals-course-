function solve(input) {

    let pirate = input.shift().split('>').map(Number);
    let war = input.shift().split('>').map(Number);
    let health = Number(input.shift());
    let critical = health * 0.20;
    let tokens = input.shift().split(' ');
    let comm = tokens.shift();

    while (comm != 'Retire') {

        if (comm == 'Fire') {
            let index = Number(tokens.shift());
            let damage = Number(tokens.shift());
            if (isValid(war, index)) {
                war.splice(index, 1, war[index] - damage);
                if (war[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    break;
                }
            }
        } else if (comm == 'Defend') {
            let start = Number(tokens.shift());
            let end = Number(tokens.shift());
            let damage = Number(tokens.shift());

            if (isValid(pirate, start) && isValid(pirate, end)) {

                for (let i = start; i <= end; i++) {
                    pirate[i] -= damage
                    if (pirate[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
            }

        } else if (comm == 'Repair') {
            let index = Number(tokens.shift());
            let hp = Number(tokens.shift());

            if (isValid(pirate, index)) {
                pirate[index] += hp;
                if (pirate[index] > health) {
                    pirate[index] = health
                }
            }

        } else if (comm == 'Status') {

            let needRepair = pirate.filter(x => x < critical);
            console.log(`${needRepair.length} sections need repair.`);
        }

        tokens = input.shift().split(' ');
        comm = tokens.shift()
    }
    let pirateShipSum = pirate.reduce((a, b) => a + b, 0);
    let warshipSum = war.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);

    function isValid(ship, index) {
        return index >= 0 && index < ship.length;
    }
}

// solve(
//     (["2>3>4>5>2",
//         "6>7>8>9>10>11",
//         "20",
//         "Status",
//         "Fire 2 3",
//         "Defend 0 4 11",
//         "Repair 3 18",
//         "Retire"])
// );
solve((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 5 2 11",
    "Defend 0 3 5",
    "Repair 1 70",
    "Status",
    "Retire"])
)
