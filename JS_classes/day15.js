class Person{
    constructor(firstName, lastName, age, country, city){
        this.firstName= firstName
        this.lastName= lastName
        this.age = age
        this.country = country
        this.city = city
        this.skills = []
    }

    get getFullName(){
        //const fullName = this.firstName+ ' ' + this.lastName
        return this.firstName + ' ' + this.lastName
    }
    get getSkills(){
        return this.skills;
    }
    set setSkills(skill){
        this.skills.push(skill);
    }
    getPersonalInfo(){
        let fullName = this.getFullName
        let skills = this.skills.length >0 ? `Yeteneklerim ise sunlar: ${this.skills.join(', ')}` : ''
        return `Benim adım ${fullName} ve ${this.age} yasindayim. Ben ${this.city} sehrinde yaşıyorum ${skills}`
    }
}
/*const p1 = {
    firstName : 'resul',
    lastName : 'aktoz',
    age : 28,
    country : 'Turkey',
    city : 'Adana',
    getFullName : function(){
        return this.firstName + ' ' + this.lastName
    }
}*/

const person1 = new Person('resul','aktoz','28','Turkey','Adana')
const person2 = new Person('sinem','aktoz','28','Turkey','Adana')
const person3 = new Person('tarço','aktoz','7','Turkey','EsEs')
/*console.log(person1)
console.log(person3)
console.log(person2.getFullName)*/

person1.setSkills = 'java'
person1.setSkills = 'javascript'

person2.setSkills = 'springboot'

person3.setSkills = 'react'
person3.setSkills = 'powerBI'
console.log(
    person1.getFullName,
    person1.getSkills,
    person1.getPersonalInfo(),
    person2.getPersonalInfo(),
    person3.getPersonalInfo()
)

class Student extends Person{
    learn(){
        return 'ders dinleniyor'
    }
}

class Teacher extends Person{
    constructor (firstName, lastName,age,country,city,gender){
        super(firstName,lastName,age,country,city)
        this.gender=gender
    }
    teach(){
        return 'ders isleniyor.'
    }
    get getGender(){
        return this.gender == 1 ? 'Erkek' : 'Kadın'
    }
    getFullName(){
        return super.getFullName + '(' + this.getGender+ ')'
    }
}

const teacher1 = new Teacher('Dudu','Aktoz','55','turkey','Mersin',2)
const student1 = new Student('Gaffar','Aktoz','57','Turkey','Mersin',1)

console.log(
    teacher1.teach(),
    //teacher1.getGender,
    teacher1.getFullName()
)
console.log(
    student1.learn()
)

const p1 = new Person('Yıldırım', 'Aktoz', 30, 'Turkey', 'Kapakli')
