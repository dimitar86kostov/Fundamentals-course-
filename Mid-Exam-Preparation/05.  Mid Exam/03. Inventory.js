function inventory(arr) {

    let journal = arr.shift().split(', ');
    let tokens = arr.shift();

    while (tokens !== "Craft!") {
        let [command, item] = tokens.split(' - ');
        
        if (command == 'Collect') {
            if (!journal.includes(item)) {
                journal.push(item);
            }
        } else if (command == 'Drop') {
            if (journal.includes(item)) {
                journal.splice(journal.indexOf(item), 1);
            }
        } else if (command == 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            if (journal.includes(oldItem)) {
                journal.splice(journal.indexOf(oldItem) + 1, 0, newItem);
            }
        } else if (command == 'Renew') {
            if (journal.includes(item)) {
                journal.splice(journal.indexOf(item), 1);
                journal.push(item);
            }
        }
        tokens = arr.shift();
    }
console.log(journal.join(', '));
}
// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])