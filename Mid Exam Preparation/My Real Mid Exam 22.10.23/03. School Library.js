function schoolLibrary(params) {
    let shelf = params
        .shift()
        .split('&');
    let [comm, book, book2] = params.shift().split(' | ');

    while (comm != 'Done') {

        if (comm == 'Add Book') {
            if (!shelf.includes(book)) {
                shelf.unshift(book);
            }

        } else if (comm == 'Take Book') {
            if (shelf.includes(book)) {
                shelf.splice(shelf.indexOf(book), 1);
            }

        } else if (comm == 'Swap Books') {
            if (shelf.includes(book) && shelf.includes(book2)) {
                let index = shelf.indexOf(book2);
                let firstBook = book;
                shelf[shelf.indexOf(book)] = shelf[shelf.indexOf(book2)]
                shelf[index] = firstBook;
            }

        } else if (comm == 'Insert Book') {
            if (!shelf.includes(book)) {
                shelf.push(book);
            }

        } else if (comm == 'Check Book') {
            let index = Number(book);
            if (index >= 0 && index < shelf.length) {
                console.log(shelf[index]);
            }
        }
        [comm, book, book2] = params.shift().split(' | ');
    }
console.log(shelf.join(', '));
}

schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"])
console.log('-------');
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])
