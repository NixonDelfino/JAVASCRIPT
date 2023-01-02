import {buttonPause, buttonPlay, buttonStop, buttonSet, buttonSoundOff, buttonSoundOn} from "./index.js";
import {countdown} from "./timer.js";

function resetControls(event) {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}
function playPauseButtonChange(event) {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
    countdown()
}
function toggleSound(event) {
    buttonSoundOn.classList.toggle('hide')
    buttonSoundOff.classList.toggle('hide')
}

export {resetControls, playPauseButtonChange, toggleSound}
