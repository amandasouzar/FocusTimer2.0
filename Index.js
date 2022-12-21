import { SoundIcon } from "./SoundsImage.js";
import { Sounds } from "./Sounds.js";
import { Controls } from "./Controls.js";
import { TimerSet } from "./Timer.js";

let ForestSoundOff = document.querySelectorAll('.ForestSoundOff')
export let ForestSoundOn = document.querySelectorAll('.ForestSoundOn')
let RainSoundOff = document.querySelectorAll('.RainSoundOff')
export let RainSoundOn = document.querySelectorAll('.RainSoundOn')
let CoffeeSoundOff = document.querySelectorAll('.CoffeeSoundOff')
export let CoffeeSoundOn = document.querySelectorAll('.CoffeeSoundOn')
let FireSoundOff = document.querySelectorAll('.FireSoundOff')
export let FireSoundOn = document.querySelectorAll('.FireSoundOn')

let AddButton = document.querySelectorAll('.PlusButton')
let RemoveButton = document.querySelectorAll('.LessButton')
let PlayButton = document.querySelectorAll('.PlayButton')
let StopButton = document.querySelectorAll('.StopButton')

let MinutesDisplay = document.querySelector('.Minutes')
let SecondsDisplay = document.querySelector('.Seconds')
let MinutesDisplayDark = document.querySelector('.Minutes-2')
let SecondsDisplayDark = document.querySelector('.Seconds-2')

let LightButton = document.querySelector('#SwitchLight')
let DarkButton = document.querySelector('#SwitchDark')

// página light

let LightFullPage = document.querySelector('.LightMode')
let LightLeftPage = document.querySelector('.left-side')
let LightRightPage = document.querySelector('.right-side')

// página dark

let DarkFullPage = document.querySelector('.DarkMode')
let DarkLeftPage = document.querySelector('.left-side-2')
let DarkRightPage = document.querySelector('.right-side-2')

let Minutes
let Seconds
let Minutes2
let Seconds2

let TimerTimeOut


const soundicons = SoundIcon({
    ForestSoundOff,
    ForestSoundOn,
    RainSoundOff,
    RainSoundOn,
    CoffeeSoundOff,
    CoffeeSoundOn,
    FireSoundOff,
    FireSoundOn
})

const sounds = Sounds()

const timerset = TimerSet({
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
})

const controls = Controls({
    PlayButton,
    RemoveButton, 
    AddButton,
    StopButton,
    timerset,
    Minutes,
    Seconds,
    MinutesDisplay,
    SecondsDisplay,
    Minutes2,
    MinutesDisplayDark
})

soundicons.ForestOff()
soundicons.ForestOn()

soundicons.RainOff()
soundicons.RainOn()

soundicons.CoffeeOff()
soundicons.CoffeeOn()

soundicons.FireOff()
soundicons.FireOn()

controls.AddBut()
controls.RemoveBut()
controls.PlayBut()
timerset.StopBut()

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        timerset.ResetTimer()

    }
})

LightButton.addEventListener('click', () => {
    LightButton.classList.add('hide')

    LightFullPage.classList.add('hide')
    LightLeftPage.classList.add('hide')
    LightRightPage.classList.add('hide')

    DarkFullPage.classList.remove('hide')
    DarkLeftPage.classList.remove('hide')
    DarkRightPage.classList.remove('hide')

    DarkButton.classList.remove('hide')

})

DarkButton.addEventListener('click', () => {
    DarkButton.classList.add('hide')

    LightFullPage.classList.remove('hide')
    LightLeftPage.classList.remove('hide')
    LightRightPage.classList.remove('hide')

    DarkFullPage.classList.add('hide')
    DarkLeftPage.classList.add('hide')
    DarkRightPage.classList.add('hide')

    LightButton.classList.remove('hide')

})
