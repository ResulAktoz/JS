
const h1  = document.querySelector('h1')

const propName = 'color'
h1.style.setProperty(propName,'red') // Js de setlenenleri direkt h1.style.removeProperty('color') seklinde silebiliriz.
//h1.style.removeProperty(propName)
//document.styleSheets[0].cssRules[1].style.removeProperty('background-color') //cssRules style tarafinda kacinci
document.styleSheets[0].cssRules[0].style.setProperty('background-color','red')
 
const h1Decleration = document.styleSheets[0].cssRules[1].style
console.log(h1Decleration.getPropertyValue('background-color'))
console.log(h1Decleration.getPropertyPriority('background-color'))

function mobileDetectHandle () {
    if(isMobile.matches){
        document.body.classList.add('mobile')
    }else{
        document.body.classList.remove('mobile')
    }
}

const isMobile = window.matchMedia('(max-width: 480px)')
isMobile.addEventListener('change', mobileDetectHandle)

const input = document.querySelector('input')
input.addEventListener('select', e => {
    console.log(
        e.target.value.substring(
            e.target.selectionStart,
            e.target.selectionEnd
        )
    )
})

const textarea = document.querySelector('textarea')
const actionButtons = document.querySelectorAll('.action-btn') 

/*actionButtons.forEach(button => {
    button.addEventListener('click', e => {
        console.log(textarea.selectionStart,
            textarea.selectionEnd)
        console.log(e.target.dataset.type)
    })
}) */

 actionButtons.forEach(button => {
    button.addEventListener('click', e => {
        let selectedText = textarea.value.substring(
            textarea.selectionStart,
            textarea.selectionEnd,
            console.log(e.target.dataset.type)
        )
            // swtich tekrar kontrol! Console ile girdi görünüyor. SetRangeText kısmıyla düzeltme sonrası düzeldi.
        switch (e.target.dataset.type){
            case 'bold': 
                selectedText = `<b>${selectedText}</b>`
                break
            case 'italic':
                selectedText = `<i>${selectedText}</i>`
                break
            case 'uppercase':
                selectedText = selectedText.toLocaleUpperCase()
        }
        textarea.setRangeText(
            selectedText,
            textarea.selectionStart,
            textarea.selectionEnd,
            'select'
        )

        textarea.focus()
        preview.innerHTML = textarea.value
    })
})

const preview = document.getElementById('preview')
textarea.addEventListener('change', e => {
    preview.innerHTML = e.target.value
})


//const inputNumber = document.querySelector('input[type = number]')
const inputs = document.querySelectorAll('input.test')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')

/*incrementBtn.addEventListener('click', e => {
    inputNumber.stepUp()
})
decrementBtn.addEventListener('click', e=> {
    inputNumber.stepDown()
}) */

incrementBtn.addEventListener('click', e => {
    inputs.forEach(input =>{
        input.stepUp()
    })
})
decrementBtn.addEventListener('click', e => {
    inputs.forEach(input =>{
        input.stepDown()
    })
})

const timeInput = document.querySelector('.time')
const dateInput = document.querySelector('.date')
const fileInput = document.querySelector('.file')
const colorBtn = document.querySelector('.color')
const pickerBtn = document.getElementById('picker-btn')
pickerBtn.addEventListener('click', e => {
    //timeInput.showPicker()
    //dateInput.showPicker()
    //fileInput.showPicker()
    colorBtn.showPicker()
})
