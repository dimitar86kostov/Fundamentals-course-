function thePianist(input) {
    let collection = {};
    let n = input.shift();

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input[0].split('|');
        collection[piece] = [composer, key];
        input.shift();
    }
    
    let line = input.shift();

    while (line != 'Stop') {
        let [comm, piece, composer, key] = line.split('|');

        if (comm == 'Add') {

            if (piece in collection) {
                console.log(`${piece} is already in the collection!`);
                
            } else {
                collection[piece] = [composer, key];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }

        } else if (comm == 'Remove') {

            if (piece in collection) {
                delete collection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (comm == 'ChangeKey') {

            let newKey = composer;
            if (piece in collection) {
                collection[piece][1] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        line = input.shift();
    }

    let entries = Object.entries(collection);

    for (const [piece, info] of entries) {

        console.log(`${piece} -> Composer: ${collection[piece][0]}, Key: ${collection[piece][1]}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]

);
thePianist()