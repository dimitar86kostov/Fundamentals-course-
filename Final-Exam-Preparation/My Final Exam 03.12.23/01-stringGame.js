function stringGame(params) {

    let str = params.shift();

    let line = params.shift();

    while (line != 'Done') {

        if (line.includes('Change')) {

            let [comm, char, rep] = line.split(' ');

            let parts = str.split(char);
            str = parts.join(rep);
            console.log(str);

        } else if (line.includes('Includes')) {
            let [comm, string] = line.split(' ');
            if (str.includes(string)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }

        } else if (line.includes('End')) {

            let [comm, sub] = line.split(' ');
            if ((str.lastIndexOf(sub) + sub.length) != str.length) {
                console.log(`False`);
            } else {
                console.log(`True`);
            }

        } else if (line.includes('Uppercase')) {

            str = str.toUpperCase();
            console.log(str);

        } else if (line.includes('FindIndex')) {
            let [comm, char] = line.split(' ');

            let index = str.indexOf(char);
            console.log(index);

        } else if (line.includes('Cut')) {
            let [comm, start, count] = line.split(' ');
            start = Number(start);
            count = Number(count);
          
            let cutted = str.slice(start, start + count);
            console.log(cutted);
        }

        line = params.shift();
    }
}
// stringGame((["//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"])
// );
stringGame((["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])
)