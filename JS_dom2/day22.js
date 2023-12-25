
for(let i = 0; i<=10; i++){
    let h1 = document.createElement('h1')

    h1.className = 'test'
    h1.style.backgroundColor = 'blue'
    h1.style.color = '#fff'
    h1.textContent ='bu bir deneme' + i
    document.body.appendChild(h1)
}

const allH1Elemenets = document.querySelectorAll('h1.test')

for(const h1 of allH1Elemenets){
    console.log(h1)
    //h1.remove() hepsi mgider
    document.body.removeChild(h1)
}
