function destinationMapper(str) {

    let arr = [];
    let points = 0;

    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{3,})\1/g

    let match = pattern.exec(str)
    
    while (match != null) {
        let destination = match[2];

        points += destination.length;

        arr.push(destination)
        match = pattern.exec(str)
    }
    console.log(`Destinations: ${arr.join(', ')}`);
    console.log(`Travel Points: ${points}`);

}
destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="));
destinationMapper(("ThisIs some InvalidInput"))