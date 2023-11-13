function meetings(arr) {

    let assocArr = {};

    for (const line of arr) {
        let [day, person] = line.split(' ');

        if (!assocArr.hasOwnProperty(day)) {
            assocArr[day] = person;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }
    
    for (const [day, person ] of Object.entries(assocArr)) {
        console.log(day, '->', person);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)