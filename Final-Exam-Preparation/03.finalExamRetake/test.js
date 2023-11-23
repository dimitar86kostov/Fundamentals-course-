function secretChat(input) {

    let msg = input.shift();
    let result = msg;

    for (const line of input) {
        if (line == 'Reveal') {
            break;
        }
        let [command, param1, param2] = line.split(':|:');

        if (command == 'InsertSpace') {

            let firstPart = result.slice(0, param1)
            let secondPart = result.slice(param1)
            result = firstPart + ' ' + secondPart;
            console.log(result);

        } else if (command == 'Reverse') {

            if (result.includes(param1)) {
                let startIndex = result.indexOf(param1);
                let endIndex = startIndex + param1.length;
                let firstHalf = result.slice(0, startIndex);
                let secondHalf = result.slice(endIndex, result.length);

                let reversed = param1.split('').reverse().join('');

                result = firstHalf + secondHalf + reversed;
                console.log(result);
            }else{
                console.log('error');
            }
        } else if (command == 'ChangeAll') {

            let parts = msg.split(param1);
            result = parts.join(param2);
            console.log(result);

            // while (msg.includes(param1)) {
            //     msg = msg.replace(param1, param2);
            // }
            // result = msg;
        }
    }
    console.log(`You have a new text message: ${result}`);
}
// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);
secretChat([
    'Hiware?uiyBaby',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])