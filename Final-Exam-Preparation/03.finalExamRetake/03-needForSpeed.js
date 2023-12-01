function needForSpeed(params) {
    let cars = {};
    let sellPoint = 100000;
    let tankLimit = 75;
    let n = params.shift();

    for (let i = 0; i < n; i++) {

        let [car, mileage, fuel] = params[0].split('|');

        fuel = Number(fuel);
        mileage = Number(mileage);

        cars[car] = { mileage, fuel }
        params.shift();
    }
    let line = params.shift();

    while (line != 'Stop') {

        let tokens = line.split(' : ');
        let comm = tokens.shift();
        let car = tokens.shift();

        if (comm == 'Drive') {
            let mileage = Number(tokens[0]);
            let fuel = Number(tokens[1]);

            if (cars[car]['fuel'] >= fuel) {
                cars[car]['mileage'] += mileage;
                cars[car]['fuel'] -= fuel;
                console.log(`${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
            if (cars[car]['mileage'] >= sellPoint) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }

        } else if (comm == 'Refuel') {

            let fuel = Number(tokens[0]);
            if (cars[car]['fuel'] + fuel < tankLimit) {
                cars[car]['fuel'] += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            } else {
                let refueled = (cars[car]['fuel'] + fuel) - tankLimit;
                cars[car]['fuel'] = tankLimit;
                console.log(`${car} refueled with ${fuel - refueled} liters`);
            }

        } else if (comm == 'Revert') {
            let km = Number(tokens[0]);
            cars[car]['mileage'] -= km;
            if (cars[car]['mileage'] < 10000) {
                cars[car]['mileage'] = 10000;
            } else {
                console.log(`${car} mileage decreased by ${km} kilometers`);
            }
        }

        line = params.shift();
    }

    let entries = Object.entries(cars);

    for (const [car, info] of entries) {
        
        console.log(`${car} -> Mileage: ${info['mileage']} kms, Fuel in the tank: ${info['fuel']} lt.`);
    }
}
// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);