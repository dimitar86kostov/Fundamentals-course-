function arrayManipulator(array, commands) {

    for (const el of commands) {

        let [comm, param1, param2] = el.split(' ');
        param1 = Number(param1);
        param2 = Number(param2);

        switch (comm) {
            case 'add':
                array.splice(param1, 0, param2);
                break;
            case 'contains':
                console.log(array.indexOf(param1));
                break;
            case 'addMany':
                let splited = el
                    .split(' ')
                    .map(Number);
                splited.shift();
                splited.shift();

                for (let index = splited.length - 1; index >= 0; index--) {
                    array.splice(param1, 0, splited[index]);
                }
                break;
            case 'remove':
                array.splice(param1, 1);
                break;
            case 'shift':
                array.shift();
                array.push(param1);
                break;
            case 'sumPairs':
                let newArr = array.slice();
                let brandNew = [];

                while ((newArr.length / 2) > 0) {
                    let result = 0;
                    let sum = newArr.splice(0, 2);
                    if (sum.length > 1) {
                        result = sum[0] + sum[1];
                    } else {
                        result = sum[0];
                    }
                    brandNew.push(result);
                    array = brandNew;
                }
                break
            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                break;
        }
    }
}
arrayManipulator([],
    [])

// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print'])
// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])