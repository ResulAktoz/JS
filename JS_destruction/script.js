//destructing => şeklini bozma 
// spread => dağılma, yayılma
// rest => kalan
const numbers = [10, 12, 13,undefined,15,17,19]

const [,,number3, number4=4, ...otherNames] = numbers
console.log(number3)
console.log(number4) // undefined tanımlaması dizi atamasında gerçekleştirilebiliyor.
console.log(number3,number4,otherNames)

/*const [number1, number2, number3] = numbers;
console.log(numbers [0])
console.log(number1)
console.log(numbers [1])
console.log(number2)
console.log(numbers [2])
console.log.apply(number3)*/

const stack = [
   ['HTML','CSS',['JAVASCRIPT','REACT']],
   ['JAVA','MYSQL','NODEJS']
]

const [[firstLanguage,secondLanguage,[firstThirdLanguage]], backend] = stack

console.log([firstLanguage])
console.log(backend)
console.log([secondLanguage])
console.log([firstThirdLanguage])

const countries = [
    ['Finland', 'Helsinki'],
    ['Norway', 'Oslo'],
    ['Turkey', 'Ankara']
]

/*for(const country of countries){
    console.log(`Ülke: ${country[0]}, Başkent: ${country[1]}`)
}*/

for(const [country,capital] of countries){
    console.log(`Ülke: ${country}, Başkent: ${capital}`)
}

const user = {
    name: 'Resul',
    surname: 'Aktoz',
    age: 28,
    
    pets: {
    cats: ['tarço']
    },
    skills: ['Java','powerBI','JS'],
    hobbies: ['Basketball','Football'],

}
const{name, memleket = 'Adana'} = user

console.log(name,`Memleket: ${memleket}`)

/*function multiply([num1,num2]){
    return num1*num2
}
const numaralar = [10,20];
console.log(multiply(numaralar))*/

/*function showUserInfo(user){
    return `Merhabalar ben ${user.name} ${user.surname} , ${user.age} yaşındayım. ${user.pets.cats} adında ${user.pets.cats.length} adet kedim var.`
}*/
const {pets: {cats: kediler}} = user
console.log(kediler)
function showUserInfo({name, surname, age, pets: {cats}, skills:[skill1, ...otherSkill], ...others}){
    console.log(skill1, otherSkill)
    return `Merhabalar ben ${name} ${surname} , ${age} yaşındayım. ${cats} adında ${cats.length} adet kedim var. Skillerim ve hobilerim ${others}'dir`
    
}
console.log(
    showUserInfo(user)
)