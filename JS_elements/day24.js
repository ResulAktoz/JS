//const h1 = document.querySelector('h1')
//const ul = document.querySelector('ul')
//const deleteButtons = document.querySelectorAll('.delete-btn')
//const deleteButtons = ul.children
//const test = document.querySelector('.test')
const scrollDownBtn = document.querySelector('#scroll-down')
const scrollContent = document.querySelector('.scroll-content')
const scrollRightBtn = document.querySelector('#scroll-right')
const scrollLeftBtn = document.querySelector('#scroll-left')
const scrollContent2 = document.querySelector('.scroll-content2')
const adana = document.getElementById('adana')
const h1 = document.createElement('h1')
const p = document.createElement('p')
const ul = document.querySelector('ul')
const deleteButtons = document.querySelectorAll('.delete-btn')
const aElements = document.querySelectorAll('a')
//const li = document.querySelectorAll('li')
//console.log(deleteButtons)

/*console.log(h1.attributes.title.value)

for(const attr of h1.attributes){
    console.log(attr.name, attr.value)
}*/

/*console.log(
    ul.childElementCount
)*/

/*console.log(ul.firstElementChild)
console.log(ul.lastElementChild)*/

/*[deleteButtons].forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.remove()
        if(ul.childElementCount == 0){
            //ul.remove()
            //console.log('Ulde eleman kalmadi')
            ul.innerHTML = 'gösterilecek veri kalmadı'
        }
    })
});

console.log(
    test.clientHeight
)*/

/*const title = document.querySelector('.title')
console.log(
    //title.previousElementSibling
    title.nextElementSibling.nextElementSibling
)*/

console.log(
    scrollContent.scrollHeight
    )

    
    scrollDownBtn.addEventListener('click', () => {
        scrollContent.scrollTop += 50;
    });

    scrollRightBtn.addEventListener('click', (e) => {
        scrollContent2.scrollLeft += 50;
        console.log(e.target.tagName);
    }); 

console.log(
    scrollContent2.scrollWidth,
    scrollContent2.clientWidth
    ) 
scrollLeftBtn.addEventListener('click', () => {
    scrollContent2.scrollLeft -= 50;
}); 

scrollContent2.addEventListener('scroll', e => {
    if(scrollContent2.scrollWidth - scrollContent2.clientWidth == e.target.scrollLeft){
        scrollRightBtn.setAttribute('disabled', 'disabled');
    }else{
        scrollRightBtn.removeAttribute('disabled')
    }
    if(scrollContent2.scrollLeft == 0){
        scrollLeftBtn.setAttribute('disabled', 'disabled');
    }else{
        scrollLeftBtn.removeAttribute('disabled')
    }
})

h1.textContent = 'adana'
adana.after(h1)


p.textContent='I tried to put a paragraph in here!'
adana.before(p) // append dersem bütün içerikle beraber eklenir.


deleteButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.previousElementSibling.remove();
        e.target.remove()
        if(ul.childElementCount == 0 ) {
          ul.innerHTML ='Gosterilecek veri bulunamadi'
        }  
      })
});

console.log(adana.getBoundingClientRect());

aElements.forEach(a => {
    if(a.hasAttribute('title')){
        a.style.backgroundColor= blue
    }
})