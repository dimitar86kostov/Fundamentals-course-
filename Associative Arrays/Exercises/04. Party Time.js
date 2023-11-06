function partyTime(arr) {
    let list = arr.slice(0, arr.indexOf('PARTY'));
    let guests = arr.slice(arr.indexOf('PARTY'));
    guests.shift();
    let vip = [];
    let regular = [];

    for (const guest of list) {

        if (isNaN(guest[0])) {
            regular.push(guest);
        } else {
            vip.push(guest);
        }
    }
    // let allGuests = [];
    // allGuests.push(...vip)
    // allGuests.push(...regular);
    let allGuests = vip.concat(regular)

    for (const guest of guests) {
        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }
    console.log(allGuests.length);

    for (const person of allGuests) {
        console.log(person);
    }
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])