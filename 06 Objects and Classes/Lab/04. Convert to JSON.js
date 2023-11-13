function convertToJSON(firstName,lastName,hairColor) {
    
let obj = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
}

console.log(JSON.stringify(obj));

}
convertToJSON('George', 'Jones', 'Brown')