const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

function playPauseButtonChange(event) {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
}
function stopApplication(event) {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}
function toggleSound(event) {
    buttonSoundOn.classList.toggle('hide')
    buttonSoundOff.classList.toggle('hide')
}

buttonPlay.addEventListener('click', playPauseButtonChange)
buttonPause.addEventListener('click', playPauseButtonChange)
buttonStop.addEventListener('click', stopApplication)
buttonSoundOn.addEventListener('click', toggleSound)
buttonSoundOff.addEventListener('click', toggleSound)

aula9