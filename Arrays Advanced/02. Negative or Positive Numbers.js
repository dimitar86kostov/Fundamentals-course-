function negativeOrPositiveNumbers(array) {
    let newArr = [];
    for (const elStr of array) {
        let el = Number(elStr);
        if (el < 0) {
           newArr.unshift(el);
        }else{
            newArr.push(el);
        }
    }
    
    console.log(newArr.join('\n'));

}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])