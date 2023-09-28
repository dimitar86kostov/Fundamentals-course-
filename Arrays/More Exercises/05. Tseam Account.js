function tseamAccount(arrAccount) {
    let i = 0;
    let curIndex = arrAccount[i];
    let currentEl = '';
    let arrGames = [];

    for (let j = 0; j < curIndex.length; j++) {
        let digit = curIndex[j];

        if (digit !== ' ') {
            currentEl += digit;
            if (j === curIndex.length - 1) {
                arrGames.push(currentEl);
                currentEl = '';
            }
        } else {
            arrGames.push(currentEl);
            currentEl = '';
        }
    }
    
    i++;
    let curElGame = '';
    let curCommand = arrAccount[i];

    while (curCommand != 'Play!') {
        let comm = '';
        let isExpansion = false;
        let expandedGame = '';
        let beforExpGame = '';

        for (let index = 0; index < curCommand.length; index++) {
            let element = curCommand[index];

            if (element !== ' ') {
                if (isExpansion) {
                    expandedGame += element;

                } else if (element === '-') {
                    isExpansion = true;
                    beforExpGame = curElGame
                    continue;
                }
                curElGame += element;

            } else {
                comm = curElGame;
                curElGame = '';
            }


            if (index === curCommand.length - 1) {
                switch (comm) {
                    case 'Install':
                        if (arrGames.includes(curElGame)) {
                            continue;
                        } else {
                            arrGames.push(curElGame);
                        };
                        break;
                    case 'Uninstall':
                        if (arrGames.includes(curElGame)) {
                            arrGames.splice(arrGames.indexOf(curElGame), 1)
                        };
                    case 'Update':
                        if (arrGames.includes(curElGame)) {
                            arrGames.splice(arrGames.indexOf(curElGame), 1);
                            arrGames.push(curElGame);
                        };
                        break;
                    case 'Expansion':
                        if (arrGames.includes(beforExpGame)) {
                            arrGames.push(beforExpGame);
                            arrGames.splice(1, 0, `${beforExpGame}:${expandedGame}`);
                            arrGames.pop();
                        }
                        break;
                }
            }
        }
        curElGame = '';
        i++;
        curCommand = arrAccount[i];
    }
    console.log(arrGames.join(' '));
} 
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])