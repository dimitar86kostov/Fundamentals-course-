function ladybugs(params) {
    let num = params.shift();
    let field = [];

    let bugs = params.shift().split(' ').map(Number);

    for (let i = 0; i < num; i++) {
        if (bugs.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (const el of params) {
        let [start, direction, landing] = el.split(' ');
        start = Number(start);
        landing = Number(landing);

        if (direction == 'right') {
            if (start >= 0 && start < field.length && landing >= 0 && landing < field.length) {

                if (field[start] == 1) {

                    if (start + landing >= field.length) {
                        field[start] = 0
                    } else {
                        field.splice(start, 1, 0);
                        if (field[landing] == 1) {
                            field[landing + landing] = 1;

                        }
                    }

                }
            }
        } else {
            if (start >= 0 && start < field.length && Math.abs(landing) >= 0 && Math.abs(landing) < field.length) {
                if (field[start] == 1) {

                    field.splice(start, 1, 0)
                    if (landing >= 0) {
                        field[start - landing] = 1;
                    } else {
                        let index = start + landing;
                        field.splice(index, 1, 1);
                    }
                }
            }
        }
    }
    console.log(field.join(' '));
}
// ladybugs([3,
//     '0 1',
//     '0 right 1',
//     '2 right 1'])
// ladybugs([ 3, '0 1 2',
// '0 right 1',
// '1 right 1',
// '2 right 1']);
ladybugs([5, '3',
    '3 left 2',
    '1 left -2'])
ladybugs([5, '3',
    '3 left 2',
    '1 left -3',
])