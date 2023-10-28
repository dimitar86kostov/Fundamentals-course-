function makeADictionary(array) {

    let arr = array.map(JSON.parse);
    let obj = {};

    for (const el of arr) {

        for (const [key, value] of Object.entries(el)) {

            obj[key] = value;
        }
    }

    let keys = Object.keys(obj);

    keys.sort((a, b) => a.localeCompare(b));
    

    for (const el of keys) {

        console.log(`Term: ${el} => Definition: ${obj[el]}`);
    }
}




makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)