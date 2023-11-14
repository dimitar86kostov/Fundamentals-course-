function arenaTier(arr) {
    let arena = [];
    let totalSkills = {};

    for (const line of arr) {
        if (line == 'Ave Cesar') {
            break;
        }
        if (!line.includes('vs')) {

            let [gladiator, tech, skill] = line.split(' -> ');
            skill = Number(skill);
            let obj = {};
            obj[tech] = skill

            if (!arena.includes(gladiator)) {
                arena.push(gladiator);
                arena.push(obj);
                totalSkills[gladiator] = skill;
            } else {
                let gladTech = arena[arena.indexOf(gladiator) + 1];
                if (gladTech.hasOwnProperty(tech)) {
                    if (gladTech[tech] < skill) {
                        gladTech[tech] = skill
                        totalSkills[gladiator] += skill;
                    }
                } else {
                    gladTech[tech] = skill
                    totalSkills[gladiator] += skill;
                }
            }

        } else {
            let hasDuel = false;
            let [leftGlad, rightGlad] = line.split(' vs ');
            if (arena.includes(leftGlad) && arena.includes(rightGlad)) {

                let leftKeys = Object.keys(arena[arena.indexOf(leftGlad) + 1]);
                let rightKeys = Object.keys(arena[arena.indexOf(rightGlad) + 1]);

                for (const el of leftKeys) {
                    if (rightKeys.includes(el)) {
                        hasDuel = true;
                        break;
                    }
                }
                if (hasDuel) {

                    if (totalSkills[leftGlad] > totalSkills[rightGlad]) {
                        arena.splice(arena.indexOf(rightGlad), 2);
                        delete totalSkills[rightGlad];
                    } else {
                        arena.splice(arena.indexOf(leftGlad), 2);
                        delete totalSkills[leftGlad];
                    }
                }
            }
        }
    }
    let totalSkillEntries = Object.entries(totalSkills).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (const [name, totSkill] of totalSkillEntries) {
        console.log(`${name}: ${totSkill} skill`);

        let techEntries = Object.entries(arena[arena.indexOf(name) + 1]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        for (const [tech, skill] of techEntries) {
            console.log(`- ${tech} <!> ${skill}`);
        }
    }
}
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ])
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)