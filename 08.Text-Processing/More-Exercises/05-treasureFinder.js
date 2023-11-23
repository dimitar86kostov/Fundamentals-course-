function treasureFinder(params) {

    let key = params.shift();
    key = key.split(' ');
    
    for (const str of params) {
        if (str == 'find') {
            break;
        }
        let result = '';
        let arr = str.split('');

        let len = key.length

        for (i = 0; i < arr.length; i++) {
            let digitIdx = i;

                while (digitIdx >= len) {
                    
                    digitIdx -= len;
                }
            let newChar = arr[i].charCodeAt() - key[digitIdx];
            result += String.fromCharCode(newChar);
        }

        let type = result.split('&')
        let coord = result.split('<')

        type = type[1];
        coord = coord[1];
        let coordinates = coord.slice(0, coord.length - 1);
        console.log(`Found ${type} at ${coordinates}`);
        
    }
}
treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]
)
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]
)
