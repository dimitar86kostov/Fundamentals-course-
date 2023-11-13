function primeNumberChecker(n) {
    let isPrime = true;
    
       
       for (let b = 2; b < n; b++) {
        if (n % b === 0) {
            isPrime = false;
        }
        
       
        
    }
console.log(isPrime? "true" : 'false');
}
primeNumberChecker(7)