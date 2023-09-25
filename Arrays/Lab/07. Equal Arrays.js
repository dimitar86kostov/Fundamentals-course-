function equalArrays(arr1, arr2) {
    let newArr1 = [];
    let equalSum = 0;
    let isEqual = true;

    for (let i = 0; i < arr1.length; i++) {
        let arrNum = Number(arr1[i]);
        newArr1.push(arrNum)
        equalSum += arrNum
    }
    let newArr2 = [];
    for (let i = 0; i < arr2.length; i++) {
        let arrNum = Number(arr2[i]);
        newArr2.push(arrNum)
    }
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (newArr1[i] === newArr2[i]) {
            count++;
            continue;
        } else {
            console.log(`Arrays are not identical. Found difference at ${count} index`);
            isEqual = false
            count++;
            break;
        }     
    }
   
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${equalSum}`);
    }
}
equalArrays(['10', '20', '30'],
    ['10', '20', '30'])
equalArrays(['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])