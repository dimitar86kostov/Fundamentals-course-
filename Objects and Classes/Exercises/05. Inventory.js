function inventory(arr) {

    let heroesData = {};


    for (let i = 0; i < arr.length; i++) {

        let [hero, level, item] = arr[i].split(' / ');

        let heroObj = {
            name: hero,
            level: Number(level),
        };
    
        if (item) {
            heroObj.item = item
        }
        heroesData[hero] = heroObj
    }
    let heroNames = Object.keys(heroesData);

    heroNames.sort((a, b) => heroesData[a].level - heroesData[b].level);

    for (const el of heroNames) {
        
            console.log(`Hero: ${heroesData[el].name}`);
            console.log(`level => ${heroesData[el].level}`);

        if (heroesData[el].item) {
            console.log(`items => ${heroesData[el].item}`);
            
        }
    }
}
inventory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)
