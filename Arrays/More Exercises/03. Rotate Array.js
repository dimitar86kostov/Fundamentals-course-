function rotateArray(array) {
    
let n = Number(array.pop());

for (let i = n; i > 0; i--) {
    
    array.unshift(array[array.length - 1]);
    array.pop();
}
console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])