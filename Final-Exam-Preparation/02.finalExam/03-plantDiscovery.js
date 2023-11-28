function plantDiscovery(params) {
    let collection = {};
    let n = params.shift();
    let line = params.shift();

    for (let i = 0; i < n; i++) {

        let [plant, rarity] = line.split('<->');
        collection[plant] = [Number(rarity)];
        line = params.shift();
    }

    while (line != 'Exhibition') {

        let [comm, info] = line.split(': ')
        let [plant, rating] = info.split(' - ');
        rating = Number(rating);

        if (comm == 'Rate') {
            if (plant in collection) {

                collection[plant].push(rating);
            } else {
                console.log(`error`);
            }

        } else if (comm == 'Update') {
            if (plant in collection) {

                collection[plant][0] = rating;
            } else {
                console.log(`error`);
            }

        } else if (comm == 'Reset') {
            if (plant in collection) {

                collection[plant] = collection[plant].slice(0, 1);
            } else {
                console.log(`error`);
            }
        }
        line = params.shift();
    }

    console.log(`Plants for the exhibition:`);

    let entries = Object.entries(collection);

    for (const [plant, info] of entries) {
        let rarity = info.shift();
        let average = 0
        if (info.length > 0) {
            let sum = info.reduce((a, b) => a + b);
            average = sum / info.length;
        }
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${average.toFixed(2)}`);
    }
}

// }
// plantDiscovery((["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"])
// );
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
