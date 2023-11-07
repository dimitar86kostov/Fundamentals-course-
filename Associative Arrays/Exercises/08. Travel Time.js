function travelTime(arr) {
    let obj = {};

    for (const destination of arr) {
        let [country, town, price] = destination.split(' > ');
        price = Number(price);

        if (country in obj) {

            if (obj[country].includes(town)) {
                let priceIndex = obj[country].indexOf(town) + 1;

                if (price < obj[country][1]) {
                    obj[country].splice(priceIndex, 1, price)
                }
            } else {
                obj[country].push(town)
                obj[country].push(price)
            }
        } else {
            obj[country] = [];
            obj[country].push(town);
            obj[country].push(price);
        }
    }
    let entries = Object.entries(obj);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [country, array] of entries) {

        if (array.length <= 2) {
            console.log(`${country} -> ${array[0]} -> ${array[1]}`);
        } else {
            let currObj = {};
            for (let i = 0; i < array.length; i += 2) {
                currObj[array[i]] = array[i + 1];
            }
            let currEntries = Object.entries(currObj);

            currEntries.sort((a, b) => a[1] - b[1]);
            let result = '';
            for (let i = 0; i < currEntries.length; i++) {

                result += `${currEntries[i][0]} -> ${currEntries[i][1]} `
            }
            console.log(`${country} -> ${result}`);
        }
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])