function perfectNumber(n) {

    if (n < 0) {
        console.log("It's not so perfect.");
    }

    let sum = 0;
    let isPerfect = false;

    function checkingIfNumIsPerf() {
        for (let i = 1; i < n; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }
        if (sum == n) {
            isPerfect = true;
        } 
        return isPerfect;
    }

    checkingIfNumIsPerf(n) ? console.log("We have a perfect number!") : console.log("It's not so perfect.");
}
perfectNumber(1236498)