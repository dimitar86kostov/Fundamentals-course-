function towns(arr) {
    let newArr = [];
   
    for (const el of arr) {
        let [town, latitude, longitude] = el.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let city = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        }

        newArr.push(city);
    }
    newArr.forEach((i) => console.log(i));

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])