let sampleJSON = `[
    {
        "name" : "Resul",
        "surname" : "Aktoz",
        "skills" : []
    },
    {
        "name" : "Sinem",
        "surname" : "Aktoz"
    }
]`
/*try{
    let users = JSON.parse(sampleJSON, (key,value) => {
        console.log('KEY', key)
        console.log('VAlUE', value)
    })
    console.log(typeof users)
}catch(err){
    console.log(err)
}*/

try{
    let users = JSON.parse(sampleJSON, (key,value) => {
        return key == 'name' ? value.toUpperCase() : value
    })
    console.log(users)
}catch(err){
    console.log(err)
}

/*let users = JSON.parse(sampleJSON)
console.log(typeof users) //JSON'dan objeye döndürdük. */

let categories = [
    {
        name : 'css',
        count : 5,
    },
    {
        name : 'js',
        count : 3,
    }
]

//let categoriesJSON = JSON.stringify(categories, undefined, 4) //JSON oluşturulurken prg. başı boşluk ataması.
let categoriesJSON = JSON.stringify(categories, ['count'], 4) // JSON'dan sadece countları al ve 4 birim boşluk at.
console.log(categoriesJSON) //objeden JSON'a döndürdük 


