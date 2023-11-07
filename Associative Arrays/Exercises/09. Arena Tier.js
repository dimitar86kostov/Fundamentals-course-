function arenaTier(arr) {
    let poolObj = {};
    let totalSkillObj = {};
    let lastSkillObj = {};
    let techniquesObj = {};

    for (const tier of arr) {
        if (tier == 'Ave Cesar') {
            break;
        }
        if (tier.includes('vs')) {
            let [leftGlad, rightGlad] = tier.split(' vs ');

            if (leftGlad in poolObj && rightGlad in poolObj) {
                let hasMatch = false;
                let values = Object.values(techniquesObj);

                for (const el of values) {
                    if (el.length <= 2) {

                        if (poolObj[leftGlad][0].includes(el)) {

                            if (poolObj[rightGlad].includes(el)) {
                                hasMatch = true;
                            }
                        }
                    } else {
                        for (const tech of el) {
                            if (poolObj[leftGlad][0].includes(tech)) {

                                if (poolObj[rightGlad].includes(tech)) {
                                    hasMatch = true;
                                }
                            }
                        }
                    }
                }
                if (!hasMatch) {
                    continue;
                }
                if (totalSkillObj[leftGlad] > totalSkillObj[rightGlad]) {
                    delete totalSkillObj[rightGlad];
                    delete poolObj[rightGlad];
                    continue;
                } else {
                    delete totalSkillObj[leftGlad];
                    delete poolObj[leftGlad];
                    continue;
                }
            } else {
                continue;
            }
        }
        let [name, technique, currSkill] = tier.split(' -> ');
        currSkill = Number(currSkill);

        if (name in poolObj) {
            totalSkillObj[name] += currSkill;
            techniquesObj[name].push(technique);

            if (currSkill > lastSkillObj[name]) {
                poolObj[name].unshift(currSkill);
                poolObj[name].unshift(technique);
            } else {
                poolObj[name].push(technique);
                poolObj[name].push(currSkill);
            }
        } else {
            poolObj[name] = [technique, currSkill];
            totalSkillObj[name] = currSkill;
            lastSkillObj[name] = currSkill;
            techniquesObj[name] = [technique];
        }
    }
    let totalSkillEntries = Object.entries(totalSkillObj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let poolEntries = Object.entries(poolObj).sort((a, b) => b[1] - a[1]);
    poolObj = Object.fromEntries(poolEntries);

    for (const [gladiator, technique] of totalSkillEntries) {

        console.log(`${gladiator}: ${totalSkillObj[gladiator]} skill`);

        if (poolObj[gladiator].length > 2) {
            for (let i = 0; i < poolObj[gladiator].length; i += 2) {
                console.log(`- ${poolObj[gladiator][i]} <!> ${poolObj[gladiator][i + 1]}`);
            }
        } else {
            console.log(`- ${poolObj[gladiator][0]} <!> ${poolObj[gladiator][1]}`);
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
]);