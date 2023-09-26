function mergeArrays(arrStr1, arrStr2) {
    let newArr = [];

    for (let i = 0; i < arrStr1.length; i++) {
        let arr1 = Number(arrStr1[i]);
        let arr2 = Number(arrStr2[i]);
        if (i % 2 === 0) {
            let evenSum = arr1 + arr2;
            newArr.push(evenSum);
        } else {
            let oddConcatenate = '' + arr1 + arr2;
            newArr.push(oddConcatenate);
        }
    }
    console.log(newArr.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11'])