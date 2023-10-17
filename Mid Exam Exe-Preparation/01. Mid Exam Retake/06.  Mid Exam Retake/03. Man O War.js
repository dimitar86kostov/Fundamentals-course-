function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let healtCapacity = Number(input.shift());
    

    for (let i = 0; i < input.length; i++) {
        const element = input[i].split(' ');
        let comm = element[0];

        if (comm === 'Retire') {
            break;
        }

        if (comm == 'Fire') {
            let index = Number(element[1]);
            let damage = Number(element[2]);
            if (index > 0 && index < warShip.length) {
                warShip[index] = warShip[index] - damage;
                if (warShip[index] <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    return;
                }
            }
        } else if (comm == 'Defend') {
            let start = Number(element[1]);
            let end = Number(element[2]);
            let damage = Number(element[3]);
            if (start >= 0 && end < pirateShip.length) {

                for (let j = 0; j <= end; j++) {
                    pirateShip[j] -= damage
                    if (pirateShip[j] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
                
            }
        } else if (comm == 'Repair') {
            let index = Number(element[1]);
            let healed = Number(element[2]);
            if (index >= 0 && index < pirateShip.length) {
                if (healtCapacity >= pirateShip[index]) {
                    pirateShip[index] += healed;
                }
            }
        } else if (comm == 'Status') {
            let count = 0;
            for (let x = 0; x < pirateShip.length; x++) {
                if (pirateShip[x] < healtCapacity * 0.20) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
    
        // let pirateShipSum = pirateShip.reduce((acc, value) => acc += value);
        let pirateShipSum = 0;
        for (const el of pirateShip) {
            pirateShipSum += el;
        }
        console.log(`Pirate ship status: ${pirateShipSum}`);
        // let warshipSum = warShip.reduce((acc, value) => acc += value);
        let warshipSum = 0;
        for (const el of warShip) {
            warshipSum += el;
        }
        console.log(`Warship status: ${warshipSum}`);
    
}
// manOWar(["2>3>4>5>2",
// "6>7>8>9>10>11",
// "20",
// "Status",
// "Fire 2 3",
// "Defend 0 4 11",
// "Repair 3 18",
// "Retire"])

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])