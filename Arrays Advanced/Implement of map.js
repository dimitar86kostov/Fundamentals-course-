function implementMap() {

    let numbers = [2, 5, 10, 4, 7, 3, 2]
    console.log(numbers);
    
    function map(arr, callback) {
        let transformed = [];
    
        for (const el of arr) {
            transformed.push(callback(el));
        }
        return transformed;
    }
    
    let result = map(numbers, x => x * 2)

    console.log(result);
}

implementMap()