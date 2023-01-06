export function Sounds() {
    const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kichenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
    )
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
    )

    bgAudio.loop = true

    function pressButton() {
        buttonPress.play()
    }
    function timeEnd() {
        kichenTimer.play()
    }
    

    return {
        pressButton,
        timeEnd,
        bgAudio
    }
}

