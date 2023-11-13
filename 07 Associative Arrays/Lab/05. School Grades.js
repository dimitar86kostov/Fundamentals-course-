function schoolGrades(arr) {

    let assocArr = {};

    for (const line of arr) {

        let score = 0;
        let tokens = line.split(' ')
        let student = tokens.shift();
        let count = 0;

        for (const grades of tokens) {
            let grade = Number(grades);
            score += grade;
            count++
        }

        if (!assocArr.hasOwnProperty(student)) {
            let average = (score / count).toFixed(2);
            assocArr[student] = average;
        } else {
            let average = (score / count).toFixed(2);
            let newScore = (Number(assocArr[student]) + Number(average)) / 2
            assocArr[student] = newScore.toFixed(2);
        }
    }

    let sorted = [];
    for (const key in assocArr) {
        sorted.push(key);
    }

    sorted.sort((a, b) => a.localeCompare(b));

    for (const key of sorted) {
        console.log(`${key}: ${assocArr[key]}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)