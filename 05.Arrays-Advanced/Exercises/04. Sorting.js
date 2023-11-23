function sorting(array) {
    let newArr = [];
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length / 2; i++) {

        let leftEl = array[i];
        let rightEl = array[array.length - 1 - i];

        if (leftEl != rightEl) {
            newArr.push(rightEl);
            newArr.push(leftEl);
        }else{
            newArr.push(rightEl);
        }
    }
console.log(newArr.join(' '));
}
sorting([21, 3, 52, 69, 63, 31, 2, 18, 94])