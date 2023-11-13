function charactersInRange(char1, char2) {

    let start = char1.charCodeAt()
    let end = char2.charCodeAt()
    let isOposit = false;

    if (char1 > char2) {
        isOposit = true;
    }
    let result = '';

    if (isOposit) {
        result = oposit(char1, char2);
    } else {
        result = normal(char1, char2);
    }
    function oposit() {
        for (let i = end + 1; i < start; i++) {
            let currChar = i.toString();
            result += `${String.fromCharCode(currChar)} `;
        }
        return result;
    }
    function normal() {
        for (let i = start + 1; i < end; i++) {
            let currChar = i.toString();
            result += `${String.fromCharCode(currChar)} `;
        }
        return result;
    }
    console.log(result);
}
charactersInRange('C', '#');
charactersInRange('a', 'd');
charactersInRange('#', ':');

// let min = Math.min(start, end);
// let max = Math.max(start, end)
// for (let i = min + 1; i < max; i++) {
//     let currChar = i.toString();
//     result += `${String.fromCharCode(currChar)} `;
// }