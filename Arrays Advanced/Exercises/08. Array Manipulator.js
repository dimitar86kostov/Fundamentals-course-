function arrayManipulator(array, commands) {

    for (const el of commands) {

        let command = el.split(' ');
        let action = command[0];
        

        switch (action) {
            case 'add':
                let index = Number(command[1]);
                let num = Number(command[2]);
                array.splice(index, 0, num);
                break;
            case 'contains':
                let number = Number(command[1])
                console.log(array.indexOf(number));
                break;
            case 'addMany':
                let idx = command[1];
                let numsToAdd = command.slice(2,);
                for (const el of numsToAdd) {
                    array.splice(idx, 0, Number(el));
                    idx++;
                }
                break;
            case 'remove':
                let x = Number(command[1])
                array.splice(x, 1);
                break;
            case 'shift':
                let n = Number(command[1]);
                for (let i = 0; i < n; i++) {
                    let firstEl = array.shift();
                    array.push(firstEl);
                }
            
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
            default:
                break;
        }
    }
}


//  arrayManipulator([1, 2, 4, 5, 6, 7],
//      ['add 1 8', 'contains 1', 'contains 3', 'prisnt'])
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1 2 3', 'print'])