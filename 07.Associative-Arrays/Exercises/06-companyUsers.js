function companyUsers(arr) {
    let obj = {};

    for (const line of arr) {
        let [compName, employee] = line.split(' -> ');

        if (compName in obj) {
            if (!obj[compName].includes(employee)) {
                obj[compName].push(employee)
            }
        } else {
            obj[compName] = [employee]
        }
    }
    let entries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [compName, id] of entries) {
        console.log(compName);
        id.forEach(id => 
            console.log(`-- ${id}`));
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])