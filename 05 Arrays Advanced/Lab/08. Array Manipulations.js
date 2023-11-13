function arrayManipulations(input) {
    
        let array = [];
        let arrStr = input.shift();
        let extractArray = function () {
            let pear = '';
            for (let i = 0; i <= arrStr.length; i++) {
                const element = arrStr[i];
                if (element === ' ' || i === arrStr.length) {
                    array.push(Number(pear));
                    pear = '';
                    continue;
                } else {
                    pear += element;
                }
            }
            return array;
        }
        array = extractArray(arrStr);
    
        function commands() {
    
            for (let i = 0; i < input.length; i++) {
                const element = input[i];
    
                let extractRemovedNum = function () {
                    let sum = '';
                    for (let i = element.length - 1; i > 0; i--) {
                        const el = element[i];
                        if (el !== ' ') {
                            sum += el;
                        } else {
                            break;
                        }
                    }
                    if (sum.length > 1) {
                        let reversed = sum[1] + sum[0];
                        return reversed;
                    } else {
                        return sum;
                    }
                }
                let num = Number(extractRemovedNum(element));
                let insIndex = Number(element[element.length - 3]);
                let extractComm = function () {
                    let curComm = '';
                    for (let j = 0; j < element.length; j++) {
                        const letter = element[j];
                        if (letter !== ' ') {
                            curComm += letter;
                        } else {
                            break
                        }
                    }
                    return curComm;
                }
                curComm = extractComm(element);
    
                switch (curComm) {
                    case 'Add':
                        array.push(num);
                        break;
                    case 'Remove':
                        if (array.includes(num)) {
                            array.splice(array.indexOf(num), 1);
                        }
                        break;
                    case 'RemoveAt':
                        array.splice(num, 1);
                        break;
                    case 'Insert':
                        array.splice(num, 0, insIndex)
                        break;
                }
            }
            return array;
        }
        let result = commands(input);
    
        console.log(result.join(' '));
}

arrayManipulations(['6 12 2 65 6 42', // output: 6 2 6 65 42 8
    'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])

/*
    let array = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        
        let [command, firstNum, secondNum] = input[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                array.push(firstNum);
                break;
            case 'Remove':
                if (array.includes(firstNum)) {
                    array.splice(array.indexOf(firstNum), 1);
                }
                break;
            case 'RemoveAt':
                array.splice(firstNum, 1);
                break;
            case 'Insert':
                array.splice(secondNum, 0, firstNum)
                break;
        }
    }
console.log(array.join(' '));
*/