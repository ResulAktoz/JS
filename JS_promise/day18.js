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

const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('islem basarili')
    }, 2500)

    //resolve('islem basarili')
    //reject('islem basarisiz')
})
promise.then((data) => {
    console.log(data)
}).catch (err => {
    console.warn(err)
})