class Person{
    constructor(name = "Anonymous",age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}.`;
    }
    getDescription(){
        // return 'Hi. I am ' + this.name + "!";
        return `Hi , I am ${this.name} and i am ${this.age} year(s) old!`;
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription()
    {
        let description = super.getDescription();

        if (!!this.hasMajor()){
            description += `Their major is ${this.major}.`;
        }
        return description;
        // return `hi , i am ${this.name} and i am ${this.age} year(s) old!`;
    }
}

class Traveler extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.location){
            greeting += ` I am visiting from ${this.location}.`;
        }
        return greeting;
    }
}

const me = new Traveler("Vaishali",20,"New York");
console.log(me.getGreeting());

const other= new Traveler();
console.log(other.getGreeting());