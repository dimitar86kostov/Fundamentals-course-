function train(input) {

    let wagons = input
        .shift()
        .split(' ')
        .map(Number);

    let capacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let [command, passengers] = input[i].split(' ');
        if (command == 'Add') {
            passengers = Number(passengers);
            wagons.push(passengers);
        } else {
            passengers = Number(command);

            for (let j = 0; j < wagons.length; j++) {
                const element = wagons[j];
                if (element + passengers <= capacity) {
                    wagons[j] = element + passengers;
                    break;
                }
            }
        }
    }
console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75', 'Add 10', 'Add 0', '30', '10', '75'])