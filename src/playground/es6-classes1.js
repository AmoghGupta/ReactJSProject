
class Person{
    
    constructor(name = 'Default', age = 0){
        this.name = name;
        this.age = age;
        console.log('test:', this.name, this.age);
    }

    getGreeting(){
        // return 'Hi!';
        return `Hi I am test ${this.name} and age is ${this.age}!`;
    }
}

const me = new Person('Amogh');
console.log(me.getGreeting());