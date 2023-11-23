function shoppingList(params) {
    let list = params.shift().split('!');


    for (let i = 0; i < params.length; i++) {
        let [command, item, newItem] = params[i].split(' ');

        if (command == 'Urgent') {

            if (!list.includes(item)) {
                list.unshift(item);
            }
        } else if (command == 'Unnecessary') {
            
            if (list.includes(item)) {
                list.splice(list.indexOf(item), 1);
            }
        } else if (command == 'Correct') {
           
            if (list.includes(item)) {
                list[list.indexOf(item)] = newItem;
            }
        } else if (command == 'Rearrange') {
           
            if (list.includes(item)) {
                let removed = list.splice(list.indexOf(item), 1);
                list.push(removed);
            }
        }
    }
    console.log(list.join(', '));
}


// shoppingList(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"])
// console.log('+++');
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
