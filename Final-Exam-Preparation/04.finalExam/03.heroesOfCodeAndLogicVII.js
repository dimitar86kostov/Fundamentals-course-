function heroesOfCodeAndLogicVII(params) {

    let n = params.shift();
    let players = {};
    let maxHP = 100;
    let maxMP = 200;

    for (let i = 0; i < n; i++) {
        let line = params.shift();
        let [name, hP, mP] = line.split(' ');
        hP = Number(hP);
        mP = Number(mP);
        players[name] = [];
        players[name].push(hP);
        players[name].push(mP);
    }

    while (params[0] != 'End') {
        let line = params[0].split(' - ');
        let command = line.shift();

        if (command == 'CastSpell') {

            let name = line[0];
            let mPNeeded = Number(line[1]);
            let spell = line[2];

            if (players[name][1] >= mPNeeded) {
                players[name][1] -= mPNeeded;
                console.log(`${name} has successfully cast ${spell} and now has ${players[name][1]} MP!`);
            }else{
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }

        } else if (command == 'TakeDamage') {

            let name = line[0];
            let damage = Number(line[1]);
            let attacker = line[2]

            if (players[name][0] - damage > 0) {
                players[name][0] -= damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${players[name][0]} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete players[name];
            }

        } else if (command == 'Recharge') {

            let name = line[0];
            let amount = Number(line[1]);

            if (players[name][1] + amount <= maxMP) {
                players[name][1] += amount;
                console.log(`${name} recharged for ${amount} MP!`);
            } else {
                let result = maxMP - players[name][1];
                players[name][1] = maxMP;
                console.log(`${name} recharged for ${result} MP!`);
            }

        } else if (command == 'Heal') {

            let name = line[0];
            let amount = Number(line[1]);

            if (players[name][0] + amount <= maxHP) {
                players[name][0] += amount;
                console.log(`${name} healed for ${amount} HP!`);
            } else {
                let result = maxHP - players[name][0];
                players[name][0] = maxHP
                console.log(`${name} healed for ${result} HP!`);
            }
        }
        params.shift();
    }
    let entries = Object.entries(players);

    for (const [name, amount] of entries) {
        
        console.log(`${name}\n  HP: ${amount[0]}\n  MP: ${amount[1]}`);  
    }
}
heroesOfCodeAndLogicVII(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])
heroesOfCodeAndLogicVII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])