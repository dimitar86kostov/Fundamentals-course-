function deserializeString(params) {
    let result = {};

    for (const line of params) {
        if (line == 'end') {
            break;
        }
        let [char, value] = line.split(':');
        let idx = value.split('/');

        for (const el of idx) {

            result[el] = char
        }
    }
    let letters = Object.values(result);

    let str = '';

    letters.forEach(el => str += el);
    console.log(str);
}
// avjavamsdmcalsdm
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
)