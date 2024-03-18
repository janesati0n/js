class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
}

class Cat extends Pet {
    constructor(name, age, livesleft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOOWW!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOOF!!';
    }
    //replace Pet eat
    eat() {
        return `${this.name} scarfs his food!`;
    }
}
