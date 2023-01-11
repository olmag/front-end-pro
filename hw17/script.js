class Person {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}

class Flat {

    constructor(){
        this.lodgers = [];
    }

    addLodger(person) {
        if (person instanceof Person) {
            this.lodgers.push(person)
           } else {
            throw Error('object is not instance of Person')
         }
    }
}

class Bilding {
    constructor(maximumNumberOfFlats){
        this.flats = [];
        this.maximumNumberOfFlats = maximumNumberOfFlats;
    }

    addFlat(flat) {
        if (flat instanceof Flat && this.flats.length < this.maximumNumberOfFlats) {
            this.flats.push(flat)
        } else if(!(flat instanceof Flat) && this.flats.length < this.maximumNumberOfFlats) {
            throw Error('object is not instance of Flat')
        } else if(flat instanceof Flat && !(this.flats.length < this.maximumNumberOfFlats)) {
            throw Error(`Added a large number of apartments (maximum ${this.maximumNumberOfFlats})`)
        }
    }
}

const person1 = new Person('oleg', 'man');
const person2 = new Person('ole', 'man');
const person3 = new Person('ole', 'man');
const person4 = new Person('ole', 'man');
const person5 = new Person('ole', 'man');
const person6 = new Person('ole', 'man');
const person7 = new Person('ole', 'man');
const person8 = new Person('ole', 'man');
const person9 = new Person('ole', 'man');
const person10 = new Person('ole', 'man');
const person11 = new Person('ole', 'man');
const person12 = new Person('ole', 'man');
const person13 = new Person('ole', 'man');
const person14 = new Person('ole', 'man');

const flat1 = new Flat();
flat1.addLodger(person1);
flat1.addLodger(person2);

const flat2 = new Flat();
flat2.addLodger(person3);

const flat3 = new Flat();
flat2.addLodger(person4);

const flat4 = new Flat();
flat2.addLodger(person6);
flat2.addLodger(person5);

const flat5 = new Flat();
flat2.addLodger(person7);

const flat6 = new Flat();
flat2.addLodger(person8);
flat2.addLodger(person9);

const flat7 = new Flat();
flat2.addLodger(person10);

const flat8 = new Flat();
flat2.addLodger(person11);

const flat9 = new Flat();
flat2.addLodger(person12);

const flat10 = new Flat();
flat2.addLodger(person13);

const flat11 = new Flat();
flat2.addLodger(person14);

const flat12 = {};

const bilding1 = new Bilding(11);
bilding1.addFlat(flat1);
bilding1.addFlat(flat2);
bilding1.addFlat(flat3);
bilding1.addFlat(flat4);
bilding1.addFlat(flat5);
bilding1.addFlat(flat6);
bilding1.addFlat(flat7);
bilding1.addFlat(flat8);
bilding1.addFlat(flat9);
bilding1.addFlat(flat10);
bilding1.addFlat(flat11);


console.log(bilding1)


