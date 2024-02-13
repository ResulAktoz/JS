const cont = document.querySelector('.container')

window.addEventListener('keydown', (e) => {
    cont.innerHTML =  `
    <div class="key">
            ${e.key === ' ' ? 'Space' : e.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>Event.Key.Code</small>
        </div>
        <div class="key">
            ${e.code}
            <small>EventCode</small>
        </div>
    `
})