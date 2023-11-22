console.log('30 days of Javascript')
console.log(['resul','aktoz'])
let age = 28
let dogumYılı = 1996
console.log('Ben %d yasindayim, %d yilinda dogdum', age,dogumYılı)
console.log({
    name: 'Resul',
    surname: 'Aktoz',
})

console.log('%c Dur! %cNaber?', 'font-size: 50px; font-family: Arial; color:red; text-shadow: 0 0 10px rgba(255,255,255,.3','color: yellow; font-size:40px')

console.warn('uyarı mesajı') // console da sarı renkli uyarı mesajı atar.

console.error('Burada bir hata var.') // kırmızı renk gelirse bir yerde bir hata vardır.

const names = ['Resul','Sinem', 'Tarço']

console.table(names)

/*console.time('calculate 1m array')

new Array(10e3).fill().map((value, index)=> index)
console.timeEnd('calculate 1m array')*/

/*console.log(
    new Array(10).fill().map((value, index)=> index) // fill içini abc ile doldurup value dönmesini istersem abc döner.
)*/

let a = 5
let b =4
console.assert(a<b, 'A Bden küçük değil.')
const isimler = ['Resul', 'Sinem', 'Tarço']
const countries = [
    ['Turkiye', 'Ankara'],
    ['England', 'London'],
    ['Germany', 'Berlin']
]

const kullanicilar = [
    {
        name : 'Resul',
        title : 'R&D Eng.',
        country : 'Turkey',
        city : 'Adana',
        age : '28'
    },

    {
        name : 'Sinem',
        title : 'R&D Eng.',
        country : 'Turkey',
        city : 'Adana',
        age : '28'
    },

    {
        name : 'Tarço',
        title : 'R&D Eng.',
        country : 'Turkey',
        city : 'Adana',
        age : '28'
    }
]

console.group('Kullanicilar')
console.log(kullanicilar);
console.groupEnd()

console.group('Countries')
console.log(countries);
console.groupEnd()

console.group('İsimler')
console.log(isimler);
console.groupEnd()

const test = () => {
    console.count('test called')
}

test()
test()
test()
