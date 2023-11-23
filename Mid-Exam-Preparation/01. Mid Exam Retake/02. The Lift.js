function theLift(array) {

    if (array.length < 1) {
        return;
    }
    let ppl = Number(array[0]);
    let wagons = array[1].split(' ').map(Number);
    let newArr = [];
    let hasEmpty = false;

    for (let i = 0; i < wagons.length; i++) {
        let lift = wagons[i];
        let spaces = 0;

        switch (lift) {
            case 0:
                spaces = 4;
                break;
            case 1:
                spaces = 3;
                break;
            case 2:
                spaces = 2;
                break;
            case 3:
                spaces = 1;
                break;
            default:
                break;
        }

        if (ppl >= spaces) {
            ppl -= spaces;
            newArr.push(4)
        } else if (ppl < spaces) {
            if (ppl <= 0){
                newArr.push(lift)
                hasEmpty = true;
                continue;
            }
            spaces = ppl
            newArr.push(spaces)
            ppl = 0;
            hasEmpty = true;
        }
        
    }

    if (hasEmpty) {
        console.log(`The lift has empty spots!`);
        console.log(newArr.join(' '));
    } else if (!hasEmpty && ppl > 0) {
        console.log(`There isn't enough space! ${ppl} people in a queue!`);
        console.log(newArr.join(' '));
    } else {
        console.log(newArr.join(' '));
    }
}

theLift([
    "2",
    '-4'
]
)
theLift([
    
    
]
)