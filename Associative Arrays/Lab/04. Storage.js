function storage(arr) {

    let map = new Map();

    for (const product of arr) {
        let [item, value] = product.split(' ');
        value = Number(value);
        
        if (map.has(item)) {

            let curValue = map.get(item);
            let newValue = curValue + value;
            map.set(item, newValue);
        } else {
            map.set(item, value);
        }
    }
    
    for (const [item, value] of map) {
        console.log(item, '->', value);
    }

}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)