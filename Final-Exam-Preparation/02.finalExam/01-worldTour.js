function worldTour(params) {

    let str = params.shift();
    let line = params.shift();

    while (line != 'Travel') {

        if (line.includes('Switch')) {
            let [comm, old, newStr] = line.split(':');
            old = old.trim();
            newStr = newStr.trim();

            if (str.includes(old)) {

                let parts = str.split(old);
                str = parts.join(newStr);
            }
            console.log(str);

        } else {
            let [comm, tokens] = line.split(' ');

            if (comm == 'Add') {
                tokens = tokens.split(':');
                let index = Number(tokens[1]);
                let inserted = tokens[2];
                if (index >= 0 && str.length > index) {

                    let firstPart = str.slice(0, index);
                    let lastPart = str.slice(index, str.length);

                    str = firstPart + inserted + lastPart;
                }
                console.log(str);
            } else if (comm == 'Remove') {
                tokens = tokens.split(':');
                let startIdx = Number(tokens[1]);
                let endIdx = Number(tokens[2]);
                if ((startIdx >= 0 && str.length > startIdx) && (endIdx >= 0 && str.length > endIdx)) {

                    let firstPart = str.slice(0, startIdx);
                    let lastPart = str.slice(endIdx + 1, str.length);

                    str = firstPart + lastPart;
                }
                console.log(str);
            }
        }
        line = params.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${str}`);
}
// worldTour((["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"])
// );
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
)