function sumFirstAndLast(array) {
    
let result = array.pop();
console.log(Number(result) + Number(array.shift()));

}
sumFirstAndLast(['20', '30', '40']);
