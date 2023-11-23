function maxNumber(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let holder = '';

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element > arr[i + 1]) {
            max = element;
            holder += `${max} `;
        }
    }
    if (max > arr[arr.length - 1]) {
        holder += `${(arr[arr.length - 1])}`
    }else{
        holder = `${(arr[arr.length - 1])}`
    }
    console.log(holder);
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([27, 19, 42, 2, 13, 45, 48])