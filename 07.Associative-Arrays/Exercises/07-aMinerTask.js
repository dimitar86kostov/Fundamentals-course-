function aMinerTask(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        const resource = arr[i];
        const quantity = arr[i + 1];

        if (resource in obj) {
            obj[resource] += Number(quantity);
        } else {
            obj[resource] = Number(quantity);
        }
    }
    let entries = Object.entries(obj);
    for (const [resource, quantity] of entries) {
        console.log(`${resource} -> ${quantity}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
)