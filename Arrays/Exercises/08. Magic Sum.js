function magicSum(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            const next = arr[j];
            if (element + next === n) {
                console.log(element, next);
            }
        }
    }
}


magicSum([1, 7, 6, 2, 19, 23],
    8)