function factorialDivision(n1, n2) {

    
    function factor(x) {
        let factorial = 1;
       
        while (x > 0) {
            factorial *= x;
            x--;
        }

        return factorial;
    }

    let firstSum = factor(n1)
    let secondSum = factor(n2)

    console.log((firstSum / secondSum).toFixed(2));

}
factorialDivision(5, 2)