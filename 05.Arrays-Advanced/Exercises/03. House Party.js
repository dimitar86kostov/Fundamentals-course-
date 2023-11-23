function houseParty(input) {
    let list = [];
    let print = '';

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        let [name, , command] = element.split(' ');


        if (command === 'going!') {
            if (list.includes(name)) {
                console.log(print += `${name} is already in the list!`);
            } else {
                list.push(name);
            }

        } else if (command === 'not') {
            if (list.includes(name)) {
                list.splice(list.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    for (const el of list) {
        console.log(el);

    }
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])