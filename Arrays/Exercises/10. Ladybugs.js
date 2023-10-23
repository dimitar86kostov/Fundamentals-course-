function ladybugs(params) {
    let num = params.shift();
    let field = [];
    
    let initialBugs = params.shift().split(' ').map(Number);

    for (let i = 0; i < num; i++) {
        if (initialBugs[i] != 0) {
            field[i] = 1;
        }else{
            field[i] = 0;
        }
        
    }

    console.table(field);

    for (const el of params) {
        let [start, direction, landing] = el.split(' ');
        start = Number(start);
        landing = Number(landing);

        if (start >= 0 && start < field.length && landing >= 0 && landing < field.length) {

            if (field[start] == 1) {

                if (start + landing >= field.length) {
                    field[start] = 0
                } else {
                    field[landing] += 1
                    field[start] = 0
                }



                if (field[landing] == 2) {
                    field[landing] -= 1
                    landing += 1
                    field[landing] = 1
                }
            }
        }
    }
    console.table(field)
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