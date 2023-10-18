function muOnline(input) {
    let arr = input.split('|');
    let isDead = false;
    let bestRoom = 0;
    let health = 100;
    let coin = 0;

    for (const el of arr) {
        bestRoom++;
        let rooms = el.split(' ');

        if (rooms[0] === 'potion') {
            if (health + Number(rooms[1]) <= 100) {

                console.log(`You healed for ${rooms[1]} hp.`);
                health += Number(rooms[1]);
                console.log(`Current health: ${health} hp.`);
            } else {
                let currdHp = 100 - health;
                console.log(`You healed for ${currdHp} hp.`);
                health += currdHp;
                console.log(`Current health: ${health} hp.`);
            }
        } else if (rooms[0] === 'chest') {
            coin += Number(rooms[1]);
            console.log(`You found ${rooms[1]} bitcoins.`);
        } else {
            health -= Number(rooms[1])
            if (health > 0) {
                console.log(`You slayed ${rooms[0]}.`);
            } else {
                console.log(`You died! Killed by ${rooms[0]}.`);
                console.log(`Best room: ${bestRoom}`);
                isDead = true;
                break;
            }
        }
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${coin}`);
        console.log(`Health: ${health}`);
    }

}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")