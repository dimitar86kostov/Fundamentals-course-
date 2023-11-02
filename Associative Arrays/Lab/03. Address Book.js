function addressBook(arr) {

    let book = {};

    for (const line of arr) {

        let [key, value] = line.split(':');

        if (book.hasOwnProperty(key)) {
            book[key] = value;
        } else {
            book[key] = value;
        }
    }
    let sorted = [];

    for (const key in book) {
        sorted.push(key);
    }
    sorted.sort((a, b) => a.localeCompare(b));

    for (const key of sorted) {
        console.log(key, '->', book[key]);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)