function flightSchedule(input) {
    let obj = {};
    let check = input.pop();
    check = check.shift();

    let allFlights = input.shift();

    allFlights.forEach(element => {
        let [sector, dest, eventual] = element.split(' ');

        if (eventual) {
            dest = `${dest} ${eventual}`
        }
        obj[sector] = dest;

    });
    let changed = input.shift();

    for (const el of changed) {

        let [flight, status] = el.split(' ');

        if (check == 'Cancelled') {

            if (flight in obj) {

                obj[flight] = status;
            }

        } else if (check == 'Ready to fly') {

            if (flight in obj) {

                obj[flight] = status;
            }
        }
    }

    for (const [key, value] of Object.entries(obj)) {

        if (check == 'Cancelled') {
            if (value == check) {
    
                allFlights.forEach(element => {
                    let [sector, dest] = element.split(' ');
            
                    if (key == sector) {
                        
                        console.log(`{ Destination: '${dest}', Status: '${check}' }`);
                    }
                });            
            }
        }else if (check == 'Ready to fly'){
            
            allFlights.forEach(element => {
                let [sector, dest, eventual] = element.split(' ');
                if (eventual) {
                    dest = `${dest} ${eventual}`
                }
                if (key == sector) {
                    
                  if (value !== 'Cancelled') {
                    console.log(`{ Destination: '${dest}', Status: '${check}' }`);
                  }

                }
        
            });             
        }
    }
}
flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
]
)
console.log('++++++++');
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
)