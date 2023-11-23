function searchForANumber(arr, comands) {

    let newArr = arr.slice(0, comands[0])
    newArr.splice(0, comands[1])
    let count = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (comands[2] === newArr[i]) {
            count++;
        }
    }
    console.log(`Number ${comands[2]} occurs ${count} times.`);

}
searchForANumber
    ([5, 2, 3, 4, 1, 6, 3],
        [5, 2, 3])