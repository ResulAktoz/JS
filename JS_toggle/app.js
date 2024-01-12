
/*const acBtn = document.getElementById ('ac')
const gizleBtn = document.getElementById("gizle")
const removeDiv = document.querySelector(".deneme")

gizleBtn.addEventListener('click', () => {
    removeDiv.style.display = "none"
})

acBtn.addEventListener('click', () => {
    removeDiv.style.display= "block"
}) 
that's mine.
*/
/*const button = document.getElementById('btn')
//const content = document.getElementById('content')
// console.log(
//     button,
//     content
// )
const content = document.querySelector(button.dataset.target)
button.innerText = button.dataset.hide



button.addEventListener('click', () => {
    if(content.style.display == '', content.style.display == 'block'){
        content.style.display = 'none';
        button.innerText = button.dataset.show;
    }else{
        content.style.display = 'block';
        button.innerText = button.dataset.hide;
    }
})*/

//const buttons = document.querySelectorAll('.btn')

// buttons.forEach(button => {
//     const content = document.querySelector(button.dataset.target)
//     button.innerText = button.dataset.hide



// button.addEventListener('click', () => {
//     if(content.style.display == '' || content.style.display == 'block'){
//         content.style.display = 'none';
//         button.innerText = button.dataset.show;
//     }else{
//         content.style.display = 'block';
//         button.innerText = button.dataset.hide;
//     }
// })
// })
const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    const content = document.querySelector(button.dataset.target)
    button.innerText = button.dataset.hide
    button.addEventListener('click', () => {
        if(content.classList.contains('hide')){
            content.classList.remove('hide')
            content.classList.add('show')
            button.innerText = button.dataset.hide
        }else{
            content.classList.add('hide')
            button.innerText = button.dataset.show
        }
    })
})