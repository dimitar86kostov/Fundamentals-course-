function tseamAccount(arrAccount) {
    let arrGames = [];
    let commGames = [];
    let arrCommands = [];
    let currentEl = '';
    let isExpansion = false;
    let expandedGame = '';
    let beforExpGame = '';


    for (let main = 0; main < arrAccount.length; main++) {
        let element = arrAccount[main];
        if (typeof(element) !== 'string') {
           element = element.toString()
        }
        if (element === 'Play!') {
            break;
        }
        if (main === 0) {

            for (let g = 0; g < element.length; g++) {
                let digit = element[g];

                if (digit !== ' ') {
                    currentEl += digit;
                    if (g === element.length - 1) {
                        arrGames.push(currentEl);
                        currentEl = '';
                    }
                } else {
                    arrGames.push(currentEl);
                    currentEl = '';
                }
            }
        } else {

            for (let comm = 0; comm < element.length; comm++) {
                let curComm = element[comm];

                if (curComm !== ' ') {
                    if (isExpansion) {
                        expandedGame += curComm;

                    } else if (curComm === '-') {
                        isExpansion = true;
                        beforExpGame = currentEl
                        continue;
                    } else if (comm === element.length - 1) {
                        currentEl += curComm;
                        commGames.push(currentEl)
                        currentEl = '';
                        continue;
                    }
                    currentEl += curComm;

                } else {
                    arrCommands.push(currentEl);
                    currentEl = '';
                }
            }
        }
    }
    for (let i = 0; i < arrCommands.length; i++) {
        let command = arrCommands[i];
        switch (command) {
            case 'Install':
                if (arrGames.includes(commGames[i])) {
                    continue;
                } else {
                    arrGames.push(commGames[i]);
                };
                break;
            case 'Uninstall':
                if (arrGames.includes(commGames[i])) {
                    arrGames.splice(arrGames.indexOf(commGames[i]), 1)
                };
            case 'Update':
                if (arrGames.includes(commGames[i])) {
                    arrGames.splice(arrGames.indexOf(commGames[i]), 1);
                    arrGames.push(commGames[i]);
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
    console.log(arrGames.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])

/*
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
    */