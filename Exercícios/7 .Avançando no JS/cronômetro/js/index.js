import {resetControls, playPauseButtonChange} from "./controls.js" 
import {resetTimer, updateTimerDisplay, timerTimeOut} from "./timer.js";
import { Sounds } from "./sounds.js";

const sound = Sounds()
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes') 
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

export{buttonPlay, buttonPause, buttonStop, buttonSet, buttonSoundOn, buttonSoundOff, minutesDisplay, secondsDisplay, minutes}

buttonPlay.addEventListener('click', playPauseButtonChange)
buttonPause.addEventListener('click', function () {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
    sound.pressButton()
})
buttonStop.addEventListener('click', function () {
    resetControls()
    resetTimer()
    sound.pressButton()
})
buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
})
buttonSoundOff.addEventListener('click', function () {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
})
buttonSet.addEventListener('click', function () {
        let newMinutes = prompt('Digite a quantidade de minutos para o cronômetro')
        if(!newMinutes){
            resetTimer()
            return
        }
        
        minutes = newMinutes
        updateTimerDisplay(minutes, 0)
})
