const vanessaAudio = new Audio ('./public/sounds/vanessa.wav')
const kimmiAudio = new Audio ('./public/sounds/test.wav')

function playVanessa() {
    vanessaAudio.play()
}

function playKimmi() {
    kimmiAudio.play()
}

function pauseVanessa() {
    vanessaAudio.pause()
}

function pauseKimmi() {
    kimmiAudio.pause()
}

const vanessa = document.getElementById('van-light')
vanessa.addEventListener('mouseover', playVanessa)
vanessa.addEventListener('mouseout', pauseVanessa)

const kimmi = document.getElementById('kimmi-light')
kimmi.addEventListener('mouseover', playKimmi)
kimmi.addEventListener('mouseout', pauseKimmi)



