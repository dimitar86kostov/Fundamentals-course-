function sortAnArrayBy2Criteria(array) {

    array.sort((a, b) => a.localeCompare(b));
    array.sort((a, b) => a.length - b.length);

    for (const el of array) {
        console.log(el);
    }
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
console.log('-------');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])