
//const form1 = document.getElementById('form1')
/*console.log(
    //form1.element
    document.forms.form1
)*/


/*submitBtn.addEventListener('click', e => {
    
    setTimeout(() => {
        document.forms.form1.submit()
    }, 1500);
})*/
const resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', e => {
    setTimeout(() => {
        document.forms.form1.reset()
    }, 1500);
})

function checkValidity(element){
    if (element.validity.badInput) {
        element.setCustomValidity('Geçersiz bir değer girdiniz')
    } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Geçersiz bir format girdiniz')
    } else if (element.validity.rangeUnderflow) {
        element.setCustomValidity('Minimum değerden daha az')
    } else if (element.validity.rangeOverflow) {
        element.setCustomValidity('Minimum değerden daha fazla')
    } else if (element.validity.stepMismatch) {
        element.setCustomValidity('Adımda bir sıkıntı var')
    } else if (element.validity.tooLong) {
        element.setCustomValidity('Çok uzun be gardaş')
    } else if (element.validity.tooShort) {
        element.setCustomValidity('Bu da çok kısa kaldı')
    } else if (element.validity.typeMismatch) {
        element.setCustomValidity('Tipsiz misin biraz?')
    } else if (element.validity.valueMissing) {
        element.setCustomValidity('Buralar hep dutluk!')
    } else {
        element.setCustomValidity('')
    }
    element.reportValidity()
}
//const submitBtn = document.getElementById('submit-btn')
document.forms.form1.addEventListener('submit', (e) => {
    e.preventDefault();
    [...document.forms.form1.elements].reverse().forEach(element => {
       // console.log(element.validity);
    checkValidity(element)
    element.addEventListener('input', (e) => {
        checkValidity(e.target)
    })
    });
    if(e.target.checkValidity())
    e.target.submit()
})

const testBtn = document.getElementById('test')
testBtn.addEventListener('click', e => {
    if(e.isTrusted){
        console.log("sen tıkladın")
    }else{
        console.log("kimse tıklamadı")
    }
    console.log('butona tıklanıldı')
})

testBtn.dispatchEvent(
    new Event('click')
    )

const tab = document.querySelector('.tab')
const buttons = document.querySelectorAll('nav button')
const contents  = tab.querySelectorAll(".content section")

//ilk taba active class'ini ekleme.
buttons[0].classList.add("active")

// ilk tab contenti haric digerlerini gizle
console.log(
    [...contents].slice(1).forEach(content => content.style.display = 'none')
)

buttons.forEach((button, index) => button.addEventListener('click', e => {
    buttons.forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
    //console.log(contents[index])
    contents.forEach(content => content.style.display = 'none')
    contents[index].style.display = 'block'
    // baska bir alandan bu kodu dinlemek kullanmak istersem => 
    tab.dispatchEvent(
        new CustomEvent('tabChanged', {
            detail : {
                tab : index // tablara tıklandiginda e.detail ile bunu obje olarak görüntüleyebiliriz. direkt e.detail.tab yazılırsa sadece index num gelir.
            }
        })
    )
}));

tab.addEventListener('tabChanged', (e) => {
    console.log('tab degisti.', e.detail)
})