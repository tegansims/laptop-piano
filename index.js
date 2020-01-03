// --- functions --- //

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"`) || document.querySelector(`audio[data-key="${event.target.dataset.key}"]`)
    const key = document.querySelector(`li[data-key="${event.keyCode}"`) || document.querySelector(`li[data-key="${event.target.dataset.key}"]`)

    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
}

function removeTransition(event) {
    if(event.propertyName !== 'transform') return
    this.classList.remove('playing')
}


// --- constants --- //

const white = document.querySelectorAll('.white')
const black = document.querySelectorAll('.black')


// --- event listeners --- //

white.forEach(w => {
    w.addEventListener('click', playSound)
    w.addEventListener('transitionend', removeTransition) 
} )

black.forEach(b => {
    b.addEventListener('click', playSound)
    b.addEventListener('transitionend', removeTransition) 
} )

window.addEventListener('keydown', playSound)