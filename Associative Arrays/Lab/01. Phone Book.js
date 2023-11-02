function phoneBook(arr) {

    let assocArr = {};

    for (const line of arr) {
        let [name, phone] = line.split(' ');
        assocArr[name] = phone;
    }

    for (const [name, phone] of Object.entries(assocArr)) {

        console.log(name, '->', phone);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])