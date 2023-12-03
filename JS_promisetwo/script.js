const box = document.querySelector ('.box')

/*setTimeout(() => {
    box.classList.add('bigger')
    setTimeout(() => {
        box.classList.add('circle')
        setTimeout(() => {
            box.classList.add('move')
            setTimeout(() => {
                box.classList.add('color')
                setTimeout(() => {
                    box.classList.remove('color')
                }, 500);
            }, 500);
        }, 500);
    }, 500)
}, 500);    //callbackHell */

/*new Promise ((resolve, reject)=> {
    
    //basarili
    resolve({
        name : 'Resul',
        surname : 'Aktoz'

    })

    //basarisiz
    reject('cözülmedi')
})
.then(data => {
    data.web = 'https://prototurk.com'
    return data
})
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})
.finally(() => console.log('bitti')) // her durumda çalışıyor. */


/*function wait(ms) {

    return new Promise(function(resolve) {
        setTimeout(resolve,ms)
    })
}*/

/*const wait = ms => new Promise((resolve,reject) => {
    setTimeout(resolve,ms)
})



wait(500)
.then(()=> console.log('animasyon basliyor'))
.then(() => {
    box.classList.add('bigger')
    return wait(500)
})
.then(()=> {
    box.classList.add('circle')
    return wait(500)
})
.then(()=> {
    box.classList.add('move')
    return wait(500)
})
.then(()=> {
    box.classList.add('color')
    return wait(500)
})
.then(()=> {
    box.classList.remove('color')
    return wait(500)
})
.then(()=> {
    box.classList.remove('move')
    return wait(500)
})
.then(()=> {
    box.classList.remove('circle')
    return wait(500)
})
.finally(()=> console.log('animasyon bitti')) */

/*class Resul {
    resolved = []
    rejected = []
    constructor(callback){
        callback(this.resolve.bind(this), this.reject.bind(this))
    }
    resolve(data){
        //this.resolved.map(callback => callback()) // dataları then ile yakalamak için bunun yerine
        //this.resolved.reduce((old, current) => current(old), data) // old'un içi boş ilk başta ilk then'den sonra o data old'a girecek ve sonrasında işlem devam edecek.
    }
    reject(data){
        //eger resolve u rejecet icin düsünseydik
        this.rejected.reduce((old, current) => current(old), data)
    }
    then(callback){
        this.resolved.push(callback)
        return this
    }
    catch(callback){
        this.rejected.push(callback)
        return this
    }
}

new Resul((resolve, reject) => {
    setTimeout(() => {
        reject('tayfunun dersi') //burda 500 ms sonra bitirdikki then e girebilsin. //resolve
    }, 500); //burda ikiside beraberken çalışır ilk yazilan baz alinir.
    //resolve('test') //byrda resolve çalıştırdigim icin const. tarafında onu görmemesini saglamaliyim.
})
.then(data => {
    console.log('data', data)
    return data + ' ' + 've prototurk.com'
})
.then(data=> {
    console.log('data son', data)
})
.catch(err => {
    console.log('Errror!!')
}) */

const prom1 = new Promise(resolve => setTimeout (resolve, 1000, 'ResulAktoz'))
const prom2 = new Promise(resolve => setTimeout (resolve, 8000, 'resulsinem.net'))
const prom3 = new Promise((resolve,reject) => setTimeout (rejected, 1500, 'resulaktoz.com'))
/*Promise.all([prom1, prom2, prom3]) //bütün datalar resolve olmuş olmalı.
    .then(res =>console.log(res))
    .catch(err => console.log(err)) */

/*Promise.race([prom1, prom2, prom3])
.then(res => console.log(res)) // ilk giren */

Promise.allSettled([prom1, prom2, prom3]) //bütün datalar resolve olmuş olmalı.
    .then(res =>console.log(res))
