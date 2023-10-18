function computerStore(array) { 
    let sum = 0;
    let isSpecial = false;

    for (const part of array) {
        if (part === 'special') {
            isSpecial = true;
            break;
        } else if (part === 'regular') {
            break;
        }
        let price = Number(part);
        if (price < 0) {
            console.log("Invalid price!");
            continue;
        }
        sum += price;
    }
    let taxes = sum * 0.20;
    let totalPrice = sum * 1.20;

    if (isSpecial) {
        totalPrice *= 0.90
    }
    if (totalPrice === 0) {
        console.log("Invalid order!");
        return;
    }
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
computerStore([
    'regular'
])
