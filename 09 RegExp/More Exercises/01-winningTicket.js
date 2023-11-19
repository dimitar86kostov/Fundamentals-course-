function winningTicket(params) {

    let input = params.split(',')
    let pattern = /[@#$^]{6,}/g

    for (const el of input) {
        let ticket = el.trim();

        if (ticket.length == 20) {

            let left = ticket.slice(0, 10);
            let right = ticket.slice(10);

            let leftM = left.match(pattern);
            let rightM = right.match(pattern);
            if (leftM && rightM) {
                leftM = leftM.join('');
                rightM = rightM.join('');
                if (leftM.length >= 6 && leftM.length < 10 &&
                    rightM.length >= 6 && rightM.length < 10) {
                    console.log(`ticket "${ticket}" - ${leftM.length}${leftM[0]}`);
                }
                if (leftM.length >= 10 && rightM.length >= 10) {
                    console.log(`ticket "${ticket}" - ${leftM.length}${leftM[0]} Jackpot!`);
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        } else {
            console.log(`invalid ticket`);
        }
    }
}
// winningTicket('Cas$$$$$$$Ca$$$$$$$h');
winningTicket('validt@cketnomatch:(');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')