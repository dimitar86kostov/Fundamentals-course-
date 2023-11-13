function pascelCaseSplitter(str) {

    let result = '';
    let arr = [];

    for (let i = 0; i <= str.length; i++) {
        let char = str[i];

        if (result.length > 1) {
            if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
                arr.push(result);
                result = '';
            }
        }
        result += char;
        if (i == str.length - 1) {
            arr.push(result);
            break;
        }
    }
   console.log(arr.join(', '));
}
pascelCaseSplitter('HoldTheDoor')
pascelCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')