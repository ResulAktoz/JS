const openAll =document.querySelector('.open-all')

const details = document.querySelectorAll('details.item')

const closeAll = document.querySelector('.close-all')

const duzenleBtn = document.querySelector('.duzenle-btn')

 

openAll.addEventListener('click', () => {

     [...details].map(details => details.setAttribute('open', 'open'))

 })

 

 

 closeAll.addEventListener('click', () => {

     [...details].map(details => details.removeAttribute('open'))

})

 

 

document.addEventListener('click', (e) => {

    // if(e.target.contains(document.querySelector('summary'))){

    //     [...detailsOpen].map(details => details.removeAttribute('open'))

    // // }

    if(e.target.contains(document.querySelector('summary'))){

        [...document.querySelectorAll('details[open]')].map (details => details.removeAttribute('open'))

    }

})

duzenleBtn.addEventListener('click', () => {

    console.log('Duzenle Butonuna tikladin!')

})