class Person{

    //setting default values for params
    constructor(name = 'Default', age = 20){
        console.log('Hello from person');
        this.name = name;
        this.age = age;
        console.log('test:', this.name, this.age);
    }
    getGreeting(){
        // return 'Hi!';
        return `Hi I am ${this.name}`;
    }
    getDescription(){
        // return 'Hi!';
        return `Hi I am test ${this.name} and age is ${this.age} years old.`;
    }
}

// class inheritance
class Student extends Person{
    constructor(name, age, stream){
        //calling parent constructor
        super(name, age);
        this.stream = stream;
        console.log('Hello from student');
    }

    hasMajor(){
       return !!this.stream;
    }

    // method overrding
    getDescription(){
        // return 'Hi!';
        console.log(super.getDescription()+ 'and I am from parent method');
        return `Hi I am test ${this.name} and age is ${this.age} years old and stream is ${this.stream}`;
    }
}

const me = new Student('Amogh', '25', 'Computer science');
console.log(me.getDescription());