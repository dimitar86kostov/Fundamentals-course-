function commonElements(array1, array2) {

    for (const first of array1) {
        for (const second of array2) {

            if (first === second) {
                console.log(first);
            }
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])