function dayOfWeek(day) {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let result = days[day - 1];
    console.log(days[day - 1]);

    if (result != undefined) {
        console.log(result);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(2)