function playSound(event) {
    console.log(event.keyCode)
    console.log(event.target.dataset.key)

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"`) || document.querySelector(`audio[data-key="${event.target.dataset.key}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"`)

    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    // key.classList.add('playing')

}

// function removeTransition(event) {
//     if(event.propertyName !== 'transform') return
//     this.classList.remove('playing')
// }


const keys = document.querySelectorAll('.key')
// keys.forEach(key => key.addEventListener('transitionend', removeTransition))


const white = document.querySelectorAll('.white')
const black = document.querySelectorAll('.black')

white.forEach(w => w.addEventListener('click', playSound) )
black.forEach(b => b.addEventListener('click', playSound) )

window.addEventListener('keydown', playSound)