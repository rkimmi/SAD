const firstVanessa = new Audio('./public/sounds/one1.wav')
const secondVanessa = new Audio('./public/sounds/two1.wav')
const thirdVanessa = new Audio('./public/sounds/three1.wav')
const fourthVanessa = new Audio('./public/sounds/four1.wav')

const firstKimmi = new Audio('./public/sounds/one2.wav')
const secondKimmi = new Audio('./public/sounds/two2.wav')
const thirdKimmi = new Audio('./public/sounds/three2.wav')
const fourthKimmi = new Audio('./public/sounds/four2.wav')

function playSound() {
        firstVanessa.play()
}

const vanessa = document.getElementById('van-light')
vanessa.addEventListener('mouseover', playSound)


playSound ()

