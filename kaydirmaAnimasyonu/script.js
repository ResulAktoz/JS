const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top    //DOM icinde acısal yönlü bir dönüs saglar bilgi amacli.

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    });
}