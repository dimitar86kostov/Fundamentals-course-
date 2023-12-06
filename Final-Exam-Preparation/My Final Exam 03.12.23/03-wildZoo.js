function wildZoo(params) {
    let areas = [];
    let animals = {};

    let line = params.shift();

    while (line != "EndDay") {

        let [comm, info] = line.split(': ')

        if (comm == 'Add') {

            let [name, neededFood, area] = info.split('-');
            neededFood = Number(neededFood);

            if (name in animals) {
                animals[name]['neededFood'] += neededFood;

            } else {
                animals[name] = { neededFood, area };

                if (areas.includes(area)) {
                    let index = areas.indexOf(area) + 1;
                    areas[index]++;
                } else {
                    areas.push(area);
                    let index = areas.indexOf(area) + 1;
                    areas[index] = 1;
                }
            }

        } else if (comm == 'Feed') {
            let [name, food] = info.split('-');

            if (name in animals) {

                animals[name]['neededFood'] -= food;

                if (animals[name]['neededFood'] <= 0) {
                    let index = areas.indexOf(animals[name]['area']) + 1;
                    areas[index]--;

                    if (areas[index] == 0) {
                        areas.splice(index - 1, 2);
                    }
                    console.log(`${name} was successfully fed`);
                    delete animals[name];

                }
            }
        }

        line = params.shift();
    }

    let animalEntries = Object.entries(animals);
    console.log("Animals:");

    for (const [name, info] of animalEntries) {

        console.log(` ${name} -> ${animals[name]['neededFood']}g`);
    }

    console.log(`Areas with hungry animals:`);

    for (let i = 0; i < areas.length; i += 2) {
        let el = areas[i];
        let count = areas[i + 1];

        console.log(` ${el}: ${count}`);
    }

}
// wildZoo(([
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Maya-7600-WaterfallArea",
//     "Add: Maya-1230-WaterfallArea",
//     "Feed: Jamie-2000",
//     "EndDay"])
// );
wildZoo((["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"])
);