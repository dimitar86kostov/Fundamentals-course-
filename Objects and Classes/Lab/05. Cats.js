function cats(arr) {
    let kittyes = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const el of arr) {
        let element = el.split(' ');
        let [name, age] = [element[0], element[1]];

        let cat = new Cat(name, age);

        kittyes.push(cat);
    }
    for (const el of kittyes) {
        el.meow()
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])