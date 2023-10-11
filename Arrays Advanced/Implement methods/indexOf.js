let arr = [10,20,30,40,50];

console.log(indexOf(arr, 30));

function indexOf(inputArr, element) {
    
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === element) {
            return i;
        }   
    }
    return -1;
}