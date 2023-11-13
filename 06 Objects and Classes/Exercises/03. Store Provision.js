function storeProvision(first, second) {

    let obj = {};

    for (let i = 0; i < first.length; i += 2) {

        let product = first[i];
        let quantity = Number(first[i + 1]);

        obj[product] = quantity;
    }

    for (let i = 0; i < second.length; i += 2) {

        let product = second[i];
        let quantity = Number(second[i + 1]);

        if (product in obj) {
            obj[product] += quantity;
        } else {

            obj[product] = quantity;
        }
    }

    let entries = Object.entries(obj);

    // for (const entry of entries) {
    //     console.log(entry.join(' -> '))
    // }
    entries.forEach((entry) => console.log(entry.join(' -> ')));

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)