export function TimerSet ({
    Minutes, 
    Seconds,
    TimerTimeOut,
    sounds,
    MinutesDisplay,
    SecondsDisplay,
    StopButton,
    PlayButton,
    Minutes2,
    Seconds2,
    MinutesDisplayDark,
    SecondsDisplayDark
}) {
    
    function CountDown() {
        TimerTimeOut = setTimeout(function () {
            PlayButton.disabled = true
            
            Minutes = Number(MinutesDisplay.textContent)
            Seconds = Number(SecondsDisplay.textContent)

            Minutes2 = Number(MinutesDisplayDark.textContent)
            Seconds2 = Number(SecondsDisplayDark.textContent)
            
            if ((Minutes <= 0 && Seconds <= 0) || (Minutes2 <= 0 && Seconds2 <= 0) ) {
                sounds.FinishSound.play()
    
                ResetTimer()
    
                return
            }
            else if (Seconds <= 0 || Seconds2 <= 0) {
                Seconds = 60
                Seconds2 = 60
    
                --Minutes
                --Minutes2
            }
    
            SecondsDisplay.textContent = String(Seconds - 1).padStart(2, 0)
            MinutesDisplay.textContent = String(Minutes).padStart(2,0)

            SecondsDisplayDark.textContent = String(Seconds2 - 1).padStart(2, 0)
            MinutesDisplayDark.textContent = String(Minutes2).padStart(2,0)
    
            CountDown()

        }, 1000)
    }

    function StopBut () {
        StopButton.forEach(element => {

            element.addEventListener('click', () => {
            clearTimeout(TimerTimeOut)
    
            PlayButton.disabled = false
            
        });
    })}

    function ResetTimer () {
        Minutes = 0
        Seconds = 0

        Minutes2 = 0
        Seconds2 = 0
        
        SecondsDisplay.textContent = String(Seconds).padStart(2, 0)
        MinutesDisplay.textContent = String(Minutes).padStart(2,0)

        SecondsDisplayDark.textContent = String(Seconds2).padStart(2, 0)
        MinutesDisplayDark.textContent = String(Minutes2).padStart(2,0)

        PlayButton.disabled = false
    }

    return {
        CountDown,
        StopBut,
        ResetTimer
    }
}