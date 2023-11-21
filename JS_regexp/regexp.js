let str = 'benn 28 yasindayim ve 1996 dogumluyum ve Adanaliyim'
//let userName = 'resulaktoz'

/*let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
let regex = /love/gi*/
/*let word = /salak/i
let comment = prompt('yorum yaz..')
console.log(
    word.test(comment)
)
if(word.test(comment)){
    prompt('hayir sen salaksin')
}*/

/*console.log(
    str.match(/ve/ig)
    )*/

/*const pattern = /ve/g
const result = str.search(pattern)
console.log(
    result
    )*/

/*const text = 'Java is the most beautiful lang, I love java.'
let matchReplaced = text.replace(/java/gi , 'Javascript')
console.log(matchReplaced)*/

/*console.log(
    //str.match(/[0-9]/g)
    //str.match(/\D/g) //bütün hepsini alır
)*/

/*let firstName = 'resulaktoz1';

console.log(
/^[a-z0-9]+$/.test(firstName) // harfle başlayıp harfle bitiyor mu 
)*/

/*console.log(
    //str.match(/\d+/g) // str içerisinden en az 1 adet veya daha fazla sayı içeren sayıları alıyoruz.
    str.match(/\b\d{2,4}\b/g)
)*/

/*let name = 'resul'
console.log(
    //name.match(/ul/)
    /s?l$/.test(name) // a olmasa da l ile bitiyorsa true l kesin olmalı.
)*/

/*console.log(
    //str.match(/\b\w{2,4}\b/g)
    str.match(/\b[a-z]+\b/gi) //[] içerisine 0-9 yazarsan sadece sayıları bulmuş olurum.
)
*/

/*function is_valid_variable(str){
    console.log(
        /^[\w\.]+$/i.test(str)
    )
}

is_valid_variable('first_name')
is_valid_variable('first-name')
is_valid_variable('1first_name')
is_valid_variable('firstname')
is_valid_variable('resul.aktoz') */

let date = '2023-11-21'
let match = date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)

console.log(
    match.groups
)