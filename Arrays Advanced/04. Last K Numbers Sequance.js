function lastKNumbersSequance(n, k) {
    let arr = [1];

    while (n > arr.length) {
        let sum = 0;

        if (arr.length <= k) {
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            arr.push(sum)
        } else {
            for (let i = arr.length - 1; arr.length - k <= i; i--) {
                sum += arr[i];
            }
            arr.push(sum)
        }
    }
   
/*
    for (let i = 1; i < n; i++) {
        let index = Math.max(arr.length - k, 0);
        let lastEl = arr.slice(index);
        let sum = 0;
        for (const el of lastEl) {
            sum += el;
        }
        arr.push(sum);
    }
     */
    console.log(arr.join(' '));
}

lastKNumbersSequance(6, 3)