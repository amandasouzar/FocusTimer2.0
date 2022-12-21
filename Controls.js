export function Controls ({
    PlayButton,
    StopButton,
    RemoveButton, 
    AddButton,
    timerset,
    Minutes,
    MinutesDisplay,
    Minutes2,
    MinutesDisplayDark
}) {
    function PlayBut() {
        PlayButton.forEach(element => {

        element.addEventListener('click', () => {
        timerset.CountDown() 

        });
    })}

    function RemoveBut () {
       RemoveButton.forEach(element => {
        
            element.addEventListener('click', () => {

            Minutes = Number(MinutesDisplay.textContent)
            Minutes2 = Number(MinutesDisplayDark.textContent)

            MinutesDisplay.textContent = String(Minutes - 5).padStart(2,0)
            if (Minutes <= 5) {
                MinutesDisplay.textContent = String(Minutes - Minutes).padStart(2,0)
        
                RemoveButton.disabled = true
            }

            MinutesDisplayDark.textContent = String(Minutes2 - 5).padStart(2,0)
            if (Minutes2 <= 5) {
                MinutesDisplayDark.textContent = String(Minutes2 - Minutes2).padStart(2,0)
        
                RemoveButton.disabled = true
            }

            PlayButton.disabled = false

        });
    
    })}

    function AddBut () {
        AddButton.forEach(element => {

            element.addEventListener('click', () => {
            RemoveButton.disabled = false

            Minutes = Number(MinutesDisplay.textContent)
            MinutesDisplay.textContent = String(Minutes + 5).padStart(2,0)

            Minutes2 = Number(MinutesDisplayDark.textContent)
            MinutesDisplayDark.textContent = String(Minutes2 + 5).padStart(2,0)

            PlayButton.disabled = false

            });
            

    })}

    return {
        PlayBut,
        AddBut,
        RemoveBut
}}
    