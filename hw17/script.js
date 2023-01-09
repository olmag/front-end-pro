function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Flat() {
    this.lodgers = [];

    this.addLodger = function(person) {
        if (person instanceof Person) {
            this.lodgers.push(person)
           } else {
            throw Error('object is not instance of Person')
         }
    }
}

function Bilding(maximumNumberOfApartments) {
    this.flats = [];
    this.maximumNumberOfApartments = maximumNumberOfApartments;

    this.addflat = function(flat) {
        if (flat instanceof Flat && this.flats.length < this.maximumNumberOfApartments) {
            this.flats.push(flat)
           } else {
            throw Error(`object is not instance of Flat or added a large number of apartments (maximum ${this.maximumNumberOfApartments})`)
         }
    }

}

const person1 = new Person('oleg', 'men');
const person2 = new Person('ole', 'men');
const person3 = new Person('ole', 'men');
const person4 = new Person('ole', 'men');
const person5 = new Person('ole', 'men');
const person6 = new Person('ole', 'men');
const person7 = new Person('ole', 'men');
const person8 = new Person('ole', 'men');
const person9 = new Person('ole', 'men');
const person10 = new Person('ole', 'men');
const person11 = new Person('ole', 'men');
const person12 = new Person('ole', 'men');
const person13 = new Person('ole', 'men');
const person14 = new Person('ole', 'men');

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

const bilding1 = new Bilding(11);
bilding1.addflat(flat1);
bilding1.addflat(flat2);
bilding1.addflat(flat3);
bilding1.addflat(flat4);
bilding1.addflat(flat5);
bilding1.addflat(flat6);
bilding1.addflat(flat7);
bilding1.addflat(flat8);
bilding1.addflat(flat9);
bilding1.addflat(flat10);
bilding1.addflat(flat11);

console.log(bilding1)


