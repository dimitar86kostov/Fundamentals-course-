function netherRealms(params) {
    let obj = {};

    let names = params.split(',')
    for (const demon of names) {
        let demonName = demon.trim();
        obj[demonName] = [];
        let totalHealth = 0;
        let totalDamage = 0;

        let healthPat = /[^+\-/*0-9.]/g
        let damagePat = /[+-]*\d\.*\d*/g
        let multiDivPat = /[/*]/g

        let hMatch = demonName.match(healthPat)
        if (hMatch) {
            hMatch.forEach(el => totalHealth += el.charCodeAt());
        }
        let dMatch = demonName.match(damagePat);
        if (dMatch) {

            for (const el of dMatch) {
                let num = Number(el);
                totalDamage += num;
            }
        }
        let multiDivide = demonName.match(multiDivPat)
        if (multiDivide) {
            for (const el of multiDivide) {

                if (el == '*') {
                    totalDamage *= 2
                } else if (el == '/') {
                    totalDamage /= 2
                }
            }
        }
        obj[demonName].push(totalHealth);
        obj[demonName].push(totalDamage);
    }
    let keys = Object.keys(obj).sort();
    
    for (const demon of keys) {
        console.log(`${demon} - ${obj[demon][0]} health, ${(obj[demon][1]).toFixed(2)} damage`)
    }
}


netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**,  Azazel')