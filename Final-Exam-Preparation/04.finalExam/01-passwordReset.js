function passwordReset(params) {

    let str = params.shift();
    let line = params.shift();

    while (line != 'Done') {

        let [comm, param1, param2] = line.split(' ');

        if (comm == 'Cut') {
            param1 = Number(param1);
            param2 = Number(param2);
            let firstPart = str.slice(0, param1);
            let lastPart = str.slice((param1 + param2), str.length);

            str = firstPart + lastPart;
            console.log(str);

        } else if (comm == 'Substitute') {

            if (str.includes(param1)) {

                let parts = str.split(param1);
                str = parts.join(param2);
                console.log(str);
            }else{
                console.log('Nothing to replace!');
            }

        } else if (comm == 'TakeOdd') {
            let sum = '';
            for (let i = 1; i < str.length; i += 2) {

                sum += str[i];
            }
            str = sum;
            console.log(str);
        }

        line = params.shift();
    }
console.log(`Your password is: ${str}`);
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)