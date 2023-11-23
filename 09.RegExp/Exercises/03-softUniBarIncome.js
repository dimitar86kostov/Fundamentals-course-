function softUniBarIncome(params) {
    params.pop();

    let pattern = /%([A-Z][a-z]+)%[^|$%.]*?<(\w+)>[^|$%.]*?\|(\d+)\|[^|$%.]*?(\d+\.?\d*)\$/g;
    let totalIncome = 0;

    for (const line of params) {
        let match = pattern.exec(line);

        while (match != null) {

            let customerName = match[1];
            let product = match[2];
            let count = match[3];
            let price = match[4];
            match = pattern.exec(line);
            totalIncome += count * price;
            console.log(`${customerName}: ${product} - ${(count * price).toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)