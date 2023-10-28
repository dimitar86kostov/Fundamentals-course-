function employees(arr) {

    class employee {
        constructor(person, pNum) {
            this.name = person;
            this.pN = pNum;
        }
        print(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.pN}`);
        }
    }

    for (const name of arr) {
        let person = name;
        let pNum = name.length

        let emp = new employee(person, pNum)
        emp.print()
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])