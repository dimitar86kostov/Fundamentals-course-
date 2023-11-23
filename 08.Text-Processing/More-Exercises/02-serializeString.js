function serializeString([params]) {

    let total = {};

    for (const char of params) {
        
        if (!total.hasOwnProperty(char)) {
            total[char] = [];

            for (let i = 0; i < params.length; i++) {

                if (params[i] == char) {
                    total[char].push(i);
                }
            }
        }
    }
    let entries = Object.entries(total);

    for (const [char, arr] of entries) {
        let splited = arr.join('/');
        console.log((`${char}:${splited}`));
    }
}
serializeString(["abababa"])
serializeString(["avjavamsdmcalsdm"])