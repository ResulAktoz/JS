const body = document.body
const slides = document.querySelectorAll('.slide')
const rightBtn = document.getElementById('right')
const leftBtn = document.getElementById('left')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length-1) {
        activeSlide = 0
    }

    setBackgroundToBody()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length-1
    }

    setBackgroundToBody()
})

setBackgroundToBody()

function setBackgroundToBody () {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
    setActiveSlide()
}

function setActiveSlide () {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')

}