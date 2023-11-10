function piccolo(arr) {
    let parking = {};

    for (const line of arr) {
        let [direction, carNumber] = line.split(', ');

        parking[carNumber] = direction
    }
    let entries = Object.entries(parking);
    let result = [];

    for (const car of entries) {
        if (car[1] == 'IN') {
            result.push(car[0]);
        }
    }
    result.sort();

    if (result.length > 0) {
        for (const el of result) {
            console.log(el);
        }
    } else {
        console.log("Parking Lot is Empty");
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])