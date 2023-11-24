
//localStorage.setItem('name', 'Resul') //locale işlediktek sonra silinsede kalır.

/*console.log(
    localStorage.getItem('name'), //ismi getirir
    //localStorage.remove('name')
    localStorage.key(0) //referans getirir.
    )*/

/*const names = ['Resul','Sinem','tarço']
//localStorage.setItem('names', names)
const users = {
    name: 'Resul',
    surname: 'Aktoz',
}

localStorage.setItem('users', JSON.stringify(users))
localStorage.setItem('names', JSON.stringify(names))


console.log(
    localStorage
)*/

/*console.log(
    //localStorage.getItem('users'),
    //typeof localStorage.getItem('users'),
    JSON.parse(localStorage.getItem('users'))//stringi json yaptık.
)
console.log(localStorage)

//localStorage.removeItem('names')
localStorage.clear()
console.log(localStorage)*/


let basket = JSON.parse(localStorage.getItem('basket')) || []
const products = [
    {
        id : 1,
        title : 'Macbook Air',
        price : 40000
    },
    {
        id : 2,
        title : 'Macbook Pro',
        price : 60000
    },
    {
        id : 3,
        title : 'Acer Nitro',
        price : 30000
    },
]
function saveToStorage(){
    //JSON.parse(localStorage.getItem('basket'))
    localStorage.setItem('basket', JSON.stringify(basket))
}

function addBasket(productId){
    const basketIndex = basket.findIndex(b => b.productId == productId)
    if(basketIndex > -1){
        basket[basketIndex] = {
            ... basket[basketIndex],
            amount: basket[basketIndex].amount + 1
        }

    } else {
        basket.push({
            productId,
            amount: 1
        })
    }
    saveToStorage()
    
}
function removeBasket(productId){
    const item = basket.find(p => p.productId == productId )
    if(item.amount == 1){
        basket = basket.filter(p=> p.productId != productId)
    } else {
        basket = basket.map ( i => {
            if(i.productId == productId){
                i.amount -= 1
            }
            return i
        })
    }
    saveToStorage()
}

function totalPrice(){
    return basket.reduce((prev, basket) =>{
        const product = products.find(p => p.id ==basket.productId)
        return prev += (product.price*basket.amount)
    },0)
}
//addBasket(2)
//addBasket(3) diyelim sayfa yenilendi yani bunlar kalktı.
/*addBasket(2)
localStorage.setItem('basket', basket)*/
removeBasket(3)
console.log(
    totalPrice()
)
