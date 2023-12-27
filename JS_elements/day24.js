//const h1 = document.querySelector('h1')
const ul = document.querySelector('ul')
//const deleteButtons = document.querySelectorAll('.delete-btn')
const deleteButtons = ul.children
const test = document.querySelector('.test')


//console.log(deleteButtons)

/*console.log(h1.attributes.title.value)

for(const attr of h1.attributes){
    console.log(attr.name, attr.value)
}*/

/*console.log(
    ul.childElementCount
)*/

console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

[deleteButtons].forEach(btn => {
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
)