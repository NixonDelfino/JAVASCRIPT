const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes

function progressSecondsValue(event) {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
        resetControls()        
        return
    }
    
    if (seconds <= 0) {
        seconds = 60
        --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
    
    countdown()
}

function countdown(event) {setTimeout(progressSecondsValue ,1000)}
function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")

}
function playPauseButtonChange(event) {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')

    countdown()
}
function resetControls(event) {
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
buttonStop.addEventListener('click', resetControls)
buttonSoundOn.addEventListener('click', toggleSound)
buttonSoundOff.addEventListener('click', toggleSound)
buttonSet.addEventListener('click', function () {
        minutes = prompt('Digite a quantidade de minutos para o cronômetro')
        updateTimerDisplay(minutes, 0)
})
