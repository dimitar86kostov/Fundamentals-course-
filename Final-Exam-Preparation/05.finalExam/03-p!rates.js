function pirates(arr) {

    let targets = {};
    let command = arr.shift();

    while (command != 'Sail') {

        let [town, people, gold] = command.split('||');
        people = Number(people);
        gold = Number(gold);

        if (town in targets) {

            targets[town].people += Number(people);
            targets[town].gold += Number(gold);

        } else {
            targets[town] = { people, gold };
        }
        command = arr.shift();
    }
    command = arr.shift();

    while (command != 'End') {

        let tokens = command.split('=>');
        let event = tokens.shift();

        if (event == 'Plunder') {

            let [town, people, gold] = tokens;
            gold = Number(gold);
            people = Number(people);

            targets[town].people -= people;
            targets[town].gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (targets[town].gold <= 0 || targets[town].people <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete targets[town];
            }

        } else if (event == 'Prosper') {

            let [town, gold] = tokens
            gold = Number(gold);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                command = arr.shift();
                continue;
            }
            targets[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`);
        }
        command = arr.shift();
    }

    let entries = Object.entries(targets);

    if (entries.length == 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');

    } else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        for (const [town, obj] of entries) {
            console.log(`${town} -> Population: ${obj.people} citizens, Gold: ${obj.gold} kg`);
        }
    }
}
// pirates((["Nassau||95000||1000",

//     "San Juan||930000||1250",

//     "Campeche||270000||690",

//     "Port Royal||320000||1000",

//     "Port Royal||100000||2000",

//     "Sail",

//     "Prosper=>Port Royal=>-200",

//     "Plunder=>Nassau=>94000=>750",

//     "Plunder=>Nassau=>1000=>150",

//     "Plunder=>Campeche=>150000=>690",

//     "End"]))
pirates((["Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End"]))