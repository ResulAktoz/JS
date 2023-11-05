//const names = new Set(['Resul', 'Sinem']);
/*const names = new Set();
names.add('RA')
names.add('SK')
names.add('Tarço')
console.log(names)*/
//console.log(names) 
//names.forEach(name => console.log(name))

//[...names].map(name => console.log(name))
const names = ['ra', 'sk', 'tarço']
const nameSet = new Set();

for(let name of names){
    nameSet.add(names)
}
//console.log(nameSet)

const count = []

const languages = [
    'Eng',
    'Fra',
    'Fra',
    'Fra',
    'Ger',
    'Turk',
    'Ger',
]
const langSet = new Set(languages)
for(const l of langSet){ //const l nin languages içinde olduğunu belirttik?
    const filteredLang = languages.filter(lng => lng ===l ) // fltlng ile languages şçş filtreleme gerçekleştirip lng yi her elemanda gezdirdik ve lng ile l'nin denkliği var mı diye baktırıp çıktısını aldık.
    //console.log(filteredLang)
    count.push({
        language: l,
        count : filteredLang.length
    })
}
//console.log(count)

const numbers = [3, 3, 4, 5, 7, 5]
const numSet = new Set(numbers)
//console.log(numSet)

const a= [3, 3, 4, 5, 7, 5]
const b = [6, 8, 9, 4]
/*
const c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C) burada birleştirdik */

let A = new Set(a)
let B = new Set(b)
let c = a.filter((num) => B.has(num)) // eğer a arr içindekilere b sahipse bunları fltrele ve C ye at
let C = new Set(c)
//console.log(c)

// eğer farklarını bulmak istersek değilini almalıyız.


let D = new Set(a)
let E = new Set(b)
let F = a.filter((num) => !E.has(num))
let G = new Set(F)
//console.log(G)

const map = new Map()
map.set('city','Adana')
map.set(1,'Eskişehir')
map.set(true, 'bool1')
map.set(false, 'bool2')
//console.log(map)
const Obj= {}
Obj['name'] = 'RA'
Obj['1']= 'Ertugrul'
Obj[1] = 'Aktoz' // İkisini de bire atadığımda son atadığım ilkini ezer ve referans son atananı gösterir.
//console.log(Obj)

const resul = {
    name : 'Resul'
}
const ertugrul = {
    name : 'Ertugrul'
}
 const mapDeneme = new Map()

 mapDeneme.set(resul,10)
            .set(ertugrul,20)
 /*console.log(
   // map.get(resul)
    mapDeneme.entries()
 )*/
resul.surname = 'aktoz';
/* for(let u of mapDeneme.keys()){
    console.log(mapDeneme)
 }*/
 //[... mapDeneme.values()].forEach(v => console.log(v))
 [... mapDeneme].forEach(([key, val]) =>   console.log(val))
