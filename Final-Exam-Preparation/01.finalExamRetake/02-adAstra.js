function adAstra([str]) {

    let pattern = /([#|])(?<item>[A-Za-z]+\s*[A-Za-z]+)\1(?<exp>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;

    let totalCalories = 0;
    let print = [];

    let match = pattern.exec(str);

    while (match != null) {

        let result = '';

        let { item, exp, calories } = match.groups
        result = (`Item: ${item}, Best before: ${exp}, Nutrition: ${calories}`);
        print.push(result);
        totalCalories += Number(calories);

        match = pattern.exec(str);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    console.log(print.join('\n'));

}
// adAstra([

//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'

// ]);
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])