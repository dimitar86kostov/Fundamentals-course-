function passwordGenerator(input) {
    let concat = input[0] + input[1];
    let word = input[2].toUpperCase();
    let index = 0;
    let result = concat;
    let vowels = { 'a': '0', 'e': '1', 'i': '2', 'o': '3', 'u': '4' };

    for (let i = 0; i < concat.length; i++) {
        let letter = concat[i];

        if (vowels.hasOwnProperty(letter)) {
            result = result.replace(concat.charAt(i), word[index])
            index++;
            if (word.length == index) {
                index = 0;
            }
        }
    }

    let reversed = result.split('')
    reversed.reverse()
    
    console.log(`Your generated password is ${reversed.join('')}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
])