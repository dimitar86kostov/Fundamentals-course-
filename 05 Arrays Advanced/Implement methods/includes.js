let arr = [10,20,30,40,50];
includes(arr, 20)

function includes(inputArr, element) {
    
    for (const item of inputArr) {
        console.log(item === element);
        return true;
    }
    return false;
}