function repeatString(str, repeater) {
    let result = '';

    for (let i = 0; i < repeater; i++) {
        result += str

    }
    console.log(result);

}
repeatString("abc", 3);
repeatString("String", 2)