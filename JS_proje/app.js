const button = document.getElementById('generate-color-btn')
const renkler = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink']

function generateRandomNumber(maxNumber) {
   return Math.floor(Math.random()* (maxNumber+1))
}

const rgbColor = () => {
    return
    [generateRandomNumber(255),
     generateRandomNumber(255),
     generateRandomNumber(255)]
}
button.addEventListener('click', () => {
    console.log(rgbColor())
    document.body.style.backgroundColor = `rgb(${rgbColor()})`
})

    
    // const randomNumber1 = generateRandomNumber(255)
    // const randomNumber2 = generateRandomNumber(255)
    // const randomNumber3 = generateRandomNumber(255)
    