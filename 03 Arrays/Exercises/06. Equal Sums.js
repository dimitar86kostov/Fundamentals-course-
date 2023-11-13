function equalSums(arr) {
    if (arr.length === 1) {
        console.log('0');
        return;
    }
    let isNo = true;

    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let j = arr.length - 1; j > i; j--) {
            rightSum += arr[j];
        }
        if (leftSum === rightSum) {
            console.log(i);
            isNo = false;
        }
    }
    if (isNo) {
        console.log('no');
    }
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])