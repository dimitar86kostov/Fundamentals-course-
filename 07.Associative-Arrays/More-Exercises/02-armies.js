function armies(params) {

    let leaders = {};

    for (const line of params) {

        let armies = [];

        if (line.includes('arrives')) {
            let name = line.split(' arrives');
            leaders[name[0]] = [];

        } else if (line.includes(' defeated')) {
            let name = line.split(' defeated');
            if (name[0] in leaders) {
                delete leaders[name[0]];
            }
        } else if (line.includes(':')) {
            let [name, info] = line.split(': ');

            if (name in leaders) {

                let [army, count] = info.split(', ');
                armies.push(army);
                armies.push(Number(count));
                leaders[name].push(...armies);
            }
        } else if (line.includes(' + ')) {

            let [army, count] = line.split(' + ');

            for (lead in leaders) {
                let values = Object.values(leaders[lead]);

                if (values.includes(army)) {
                    leaders[lead][leaders[lead].indexOf(army) + 1] += Number(count)
                }
            }
        }
    }

    let entries = Object.entries(leaders);
    let totalCount = {};

    for (const [leader, armyArr] of entries) {
        let count = 0;

        for (let i = 1; i < armyArr.length; i += 2) {
            count += armyArr[i];
        }
        totalCount[leader] = count;
    }

    let countEntr = Object.entries(totalCount).sort((a, b) => b[1] - a[1]);

    for (const [leader, totCount] of countEntr) {

        console.log(`${leader}: ${totCount}`);

        
        let arr = leaders[leader].sort((a, b) => b[1] - a[1]);
        let curArmy = {}
        
        for (let i = 0; i < arr.length; i+=2) {
            let army = arr[i]
            let velue = arr[i + 1]
            
            curArmy[army] = velue;
        }
        let armyEntr = Object.entries(curArmy).sort((a,b)=> b[1] - a[1]);

        for (const [army, count] of armyEntr) {
            console.log(`>>> ${army} - ${count}`);
        }
    }
}
// armies(['Rick Burr arrives',
//     'Fergus: Wexamp, 30245',
//     'Rick Burr: Juard, 50000',
//     'Findlay arrives',
//     'Findlay: Britox, 34540',
//     'Wexamp + 6000',
//     'Juard + 1350',
//     'Britox + 4500',
//     'Porter arrives',
//     'Porter: Legion, 55000',
//     'Legion + 302',
//     'Rick Burr defeated',
//     'Porter: Retix, 3205']);

armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']);