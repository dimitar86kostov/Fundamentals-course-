function printNthElement(array) {
    let n = Number(array[array.length - 1]);
    let newArr = [];

    for (let i = 0; i < array.length - 1; i += n) {
        let element = array[i];
        newArr.push(element);
    }
    console.log(newArr.join(" "));
}
printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])