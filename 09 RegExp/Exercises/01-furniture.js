function furniture(input) {

    input.pop();
    let total = 0;
    let regEx = />>(?<product>[A-Z][A-Za-z]+)<<(?<price>\d+.?\d+)!(?<qty>\d+)/g;

    let match = regEx.exec(input);
    console.log('Bought furniture:');

    while (match != null) {

        let { product, price, qty } = match.groups;

        match = regEx.exec(input);
        total += price * qty;
        console.log(product);
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
)