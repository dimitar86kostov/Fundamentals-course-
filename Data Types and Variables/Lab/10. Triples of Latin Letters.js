function triplesOfLatinLetters(n) {

    for (let first = 0; first < n; first++) {
        for (let second = 0; second < n; second++) {
            for (let third = 0; third < n; third++) {
                let letter = (String.fromCharCode(97 + first))
                let letter2 = (String.fromCharCode(97 + second))
                let letter3 = (String.fromCharCode(97 + third))
                console.log(`${letter}${letter2}${letter3}`);
            }
        }
    }

}

triplesOfLatinLetters('3')