function maxSequenceOfEqualElements(arr) {
    let counter = 0;
    let value = 0;
    let equal = '';
    let holder = '';
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1]) {
            counter++;
            value = arr[i];
            newArr.push(value);
            holder += `${value}`;
            continue;

        } else if (arr[i] === arr[i - 1]) {
            counter++;
            value = arr[i];
            newArr.push(value);
            holder += `${value}`
            continue;
        }
        counter = 0;
    }

    
    let max = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == newArr[i + 1]) {
            max++
        }

    }
console.log(newArr.indexOf(value));


    console.log(holder);
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])