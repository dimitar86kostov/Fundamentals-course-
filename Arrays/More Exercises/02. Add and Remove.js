function addAndRemove(array) {
    let newArr = [1];

    for (let i = 1; i < array.length; i++) {
        let element = array[i];
        let n = i + 1

        if (element === 'add') {
            newArr.push(n)
        } else if (element === 'remove') {
            newArr.pop()
        }
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
addAndRemove(['add', 'add', 'rremove', 'add', 'add', 'add', 'add', 'remove', 'add', 'add'])
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);