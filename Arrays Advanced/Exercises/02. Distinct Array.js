function distinctArray(array) {
    let distincted = array.slice();
    let result = '';

    function distinction(array) {
        for (let j = 0; j < array.length; j++) {
            let el = array[j];

            for (let i = j + 1; i < distincted.length; i++) {
                const next = distincted[i];

                if (el === next) {
                    distincted.splice(i, 1)

                }
            }

        }
        return distincted
    }
    if (distincted.length < 3) {
        result = distinction(distincted);
    } else {
        result = distinction(distincted);
    }

    console.log(result.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([2, 2])
distinctArray([1,2,3,4,5])