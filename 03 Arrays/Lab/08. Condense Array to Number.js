function condenseArrayToNumber(arr) {
    /*
    if (arr.length === 1) {
        console.log(arr[0]);
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let sum = arr[i] + arr[i + 1];
        newArr.push(sum);
    }

    while (true) {
        let loopArr = [];
        for (let i = 0; i < newArr.length - 1; i++) {
            let sum = newArr[i] + newArr[i + 1];
            loopArr.push(sum);
        }
        if (loopArr.length === 1) {
            console.log(loopArr[0]);
            break;
        }
        newArr = loopArr;
    }
    */
    let newArr = [];

    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i] + arr[i + 1];
        }
        arr = newArr;
        newArr = [];
    }
    console.log(arr.join())
}
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([1])