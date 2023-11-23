function arrayModifier(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(Number);

    
    let [comm, i1, i2] = input.shift().split(' ');

    while (comm !== 'end') {

        i1 = Number(i1);
        i2 = Number(i2);

        if (comm == 'swap') {
            if (i1 >= 0 && i2 >= 0 && i1 < arr.length && i2 < arr.length) {
                let holder = arr[i1];
                arr[i1] = arr[i2];
                arr[i2] = holder;
            }

        } else if (comm == 'multiply') {
            if (i1 >= 0 && i2 >= 0 && i1 < arr.length && i2 < arr.length) {
                arr[i1] *= arr[i2];
            }

        } else if (comm == 'decrease') {
            arr = arr.map((x) => x - 1);
        }

        [comm, i1, i2] = input.shift().split(' ');
    }
    console.log(arr.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);
