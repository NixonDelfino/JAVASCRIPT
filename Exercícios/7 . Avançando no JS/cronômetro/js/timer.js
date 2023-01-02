import {secondsDisplay, minutesDisplay, minutes} from "./index.js";
import {resetControls} from "./controls.js";

let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}
function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout()
}
function countdown(event) {
    timerTimeOut = setTimeout(progressSecondsValue ,1000)
}
function progressSecondsValue(event) {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

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

export {updateTimerDisplay, resetTimer, countdown, progressSecondsValue, timerTimeOut}