function garage(params) {

    let garage = {};

    for (const line of params) {

        let info = line.split(' - ');
        let num = info[0];
        let tokens = info[1].split(', ');
        let carInfo = [];

        for (const el of tokens) {
            let str = '';

            let [key, value] = el.split(': ');

            str = `${key} - ${value}`
            carInfo.push(str);
        }
        let resultArr = [];
        let carStr = carInfo.join(', ');
        resultArr.push(carStr);

        if (num in garage) {
            garage[num].push(carStr);
        } else {
            garage[num] = resultArr;
        }
    }
    let entries = Object.entries(garage);

    for (const [n, cars] of entries) {
        console.log(`Garage № ${n}`);

        for (const car of cars) {
            console.log(`--- ${car}`);
        }
    }
}
// garage([
//     '1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garage([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'])