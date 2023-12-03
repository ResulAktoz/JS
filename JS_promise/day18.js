/*const test = callback => {
    setTimeout(() => {
        callback('hata olustu', [])
    }, 2000)

}

const callback= (err,data) => {

    if(err) {
        console.log('hata',err)
    } else {
        console.log('data', data)
    }

}
test(callback)*/

/*const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        //resolve('islem basarili')
        reject('islem basarisiz')
    }, 2500)

    //resolve('islem basarili')
    //reject('islem basarisiz')
})
promise.then((data) => {
    console.log(data)
}).catch (err => {
    console.warn(err)
})*/

const API_URL ='https://jsonplaceholder.typicode.com/posts'

/*(() => {
    const res = await fetch(API_URL)
    console.log(res)
})*/

/*fetch(API_URL)
    //, {
    //method :'POST',
    //body : FormData         //sunucuya değer göndermek istersek body ile gönderilecek.
})

    .then(res => res.json()
    .then(data => console.log(data))) // istek atılan yerdeki bütün datalar gelir.
    .catch (err => console.log(err))*/

async function getPosts() {
    try{
        const response =  await fetch(API_URL)
        const data = await response.json()
        console.log(data)
    }catch(err){
            console.log(err)
    }
}
getPosts()

