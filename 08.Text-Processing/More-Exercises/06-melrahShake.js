function melrahShake(params) {

    let str = params[0];
    let pattern = params[1];



    while (pattern.length > 0) {

        let start = str.indexOf(pattern);
        let end = str.lastIndexOf(pattern);

        if ((start != -1 && end != -1) && start != end) {

            let firstRemove = str.slice(0, start);
            let middleRemove = str.slice(start + pattern.length, end);
            let lastRemove = str.slice(end + pattern.length);
            str = firstRemove + middleRemove + lastRemove;

            console.log('Shaked it.');
        } else {
            break;
        }

        let index = Math.floor(pattern.length / 2);
        pattern = pattern.replace(pattern[index], '');

    }
    console.log('No shake.');
    console.log(str);
}

melrahShake(['astalavista baby',
    'sta']
);
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']
)