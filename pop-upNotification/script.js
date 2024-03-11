
// const btn = document.getElementById('button')
// const toasts = document.getElementById('toasts')

// const messages = [
//     'Bilgi',
//     'Uyari',
//     'Indirim',
//     'Hata',
// ]

// const types = [
//     'info',
//     'alert',
//     'sale',
//     'error',
// ]


// btn.addEventListener('click', () => {
//     createNotification()
// })

// function createNotification(message = null, type = null) {
//     const notification = document.createElement('div')
//     notification.classList.add('toast')
//     notification.classList.add(type ? type : getRandomType())

//     notification.innerText = message ? message : getRandomMessage()

//     toasts.appendChild(notification)

//     setTimeout(() => {
//         notification.remove()
//     }, 2500);
// }

// function getRandomMessage() {
//     return messages[Math.floor(Math.random()*messages.length)]
// }

// function getRandomType () {
//     return types[Math.floor(Math.random()*types.length)]
// }  ders kodu, her mesaj icin tipi biz belirlemis olalim buna gore kodu duzenleyelim.

const btn = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messageToTypeMap = {
    'Bilgi': 'info',
    'Uyari': 'alert',
    'Indirim': 'sale',
    'Hata': 'error',
};

const messages = Object.keys(messageToTypeMap);

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    const messageType = messageToTypeMap[randomMessage];

    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(messageType);

    notification.innerText = randomMessage;

    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2500);
}