function mergeArrays(arrStr1, arrStr2) {
    let newArr = [];

    for (let i = 0; i < arrStr1.length; i++) {

        if (i % 2 === 0) {
            let evenSum = Number(arrStr1[i]) + Number(arrStr2[i]);
            newArr.push(evenSum);
        } else {
            let oddConcatenate = arrStr1[i] + arrStr2[i];
            newArr.push(oddConcatenate);
        }
    }
    console.log(newArr.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11'])