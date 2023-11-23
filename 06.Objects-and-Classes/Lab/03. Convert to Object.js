function convertToObject(params) {

    let obj = JSON.parse(params);

    for (const key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')