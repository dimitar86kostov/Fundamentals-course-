function replaceRepeatingChars(string) {

    let result = '';
    let prevChar = '';

    for (const curChar of string) {
        if (curChar !== prevChar) {
            result += curChar;
            prevChar = curChar;
        }
    }
    console.log(result);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')




