function tseamAccount(account) {
    let games = account
        .shift()
        .split(' ');

    for (let i = 0; i < account.length; i++) {

        let [commands, curGame] = account[i].split(' ');

        if (commands === 'Play!') {
            break;
        } else {
            switch (commands) {
                case 'Install':
                    if (!games.includes(curGame)) {
                        games.push(curGame);
                    }
                    break;
                case 'Uninstall':
                    if (games.includes(curGame)) {
                        games.splice(games.indexOf(curGame), 1)
                    }
                    break;
                case 'Update':
                    if (games.includes(curGame)) {
                        
                        games.splice(games.indexOf(curGame), 1);
                        games.push(curGame);
                    }
                    break;
                case 'Expansion':
                    let exp = [gameExp, expansion] = curGame.split('-');
                    if (games.includes(gameExp)) {
                        expansion = `${gameExp}:${expansion}`
                        games.splice(games.indexOf(gameExp) + 1, 0, expansion);
                    }
                    break;

                default:
                    break;
            }
        }
    }

console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])
