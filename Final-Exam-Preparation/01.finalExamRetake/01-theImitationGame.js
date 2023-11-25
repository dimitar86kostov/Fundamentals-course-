function theImitationGame(params) {

    let msg = params.shift();

    while (params != 'Decode') {
        let instructions = params.shift()

        let [command, param1, param2] = instructions.split('|');

        if (command == 'Move') {

            let lastPart = msg.slice(0, param1);
            let firstPart = msg.slice(param1, msg.length);
            msg = firstPart + lastPart;

        } else if (command == 'Insert') {

            let firstPart = msg.slice(0, param1);
            let lastPart = msg.slice(param1, msg.length);
            msg = firstPart + param2 + lastPart;

        } else if (command == 'ChangeAll') {

            let parts = msg.split(param1);
            msg = parts.join(param2);

        }
    }
console.log(`The decrypted message is: ${msg}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'

])
theImitationGame([

    'owyouh',
    
    'Move|2',
    
    'Move|3', 
    
    'Insert|3|are', 'Insert|9|?',
    
    'Decode' ])