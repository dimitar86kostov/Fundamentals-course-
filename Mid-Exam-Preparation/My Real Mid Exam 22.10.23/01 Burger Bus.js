function burgerBus(params) {

    let cities = Number(params.shift());
    let totalProfit = 0

    for (let i = 1; i <= cities; i++) {

        let city = params.shift();
        let income = Number(params.shift());
        let expenses = Number(params.shift());

        if (i % 3 == 0) {
            if (i != 15) {
                expenses *= 1.50;
            }
        }

        if (i % 5 == 0) {
            income *= 0.90;
        }

        let profit = income - expenses;
        totalProfit += profit;
        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus((["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])

)