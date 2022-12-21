import { ForestSoundOn } from "./Index.js"
import { RainSoundOn } from "./Index.js"
import { CoffeeSoundOn } from "./Index.js"
import { FireSoundOn } from "./Index.js"

export function Sounds () {
    let ForestSound = new Audio("/FOCUSTIMER/assets/Floresta.wav")
    let RainSound = new Audio ("/FOCUSTIMER/assets/Chuva.wav")
    let CoffeeSound = new Audio("/FOCUSTIMER/assets/Cafeteria.wav")
    let FireSound = new Audio("/FOCUSTIMER/assets/Lareira.wav")
    let FinishSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    let ForestVolumeSliderL = document.querySelector('.ForestSlider1')
    let RainVolumeSliderL = document.querySelector('.RainSlider1')
    let CoffeeVolumeSliderL = document.querySelector('.CoffeeSlider1')
    let FireVolumeSliderL = document.querySelector('.FireSlider1')

    let ForestVolumeSliderD = document.querySelector('.ForestSlider2')
    let RainVolumeSliderD = document.querySelector('.RainSlider2')
    let CoffeeVolumeSliderD = document.querySelector('.CoffeeSlider2')
    let FireVolumeSliderD = document.querySelector('.FireSlider2')

    ForestSound.loop = true
    RainSound.loop = true
    CoffeeSound.loop = true
    FireSound.loop = true

    // PÁGINA LIGHT
    ForestVolumeSliderL.addEventListener('change', () => {
        ForestVolumeSliderD.value = ForestVolumeSliderL.value
        ForestSoundOn.forEach(element => {
            element.disabled = true
        });
        ForestSound.volume = (ForestVolumeSliderL.value) /100
    })
    ForestVolumeSliderL.addEventListener('mouseleave', () => {
            ForestSoundOn.forEach(element => {
                element.disabled = false
            });
        })
    // PÁGINA DARK 
    ForestVolumeSliderD.addEventListener('change', () => {
        ForestVolumeSliderL.value = ForestVolumeSliderD.value
        ForestSoundOn.forEach(element => {
            element.disabled = true
        });
        ForestSound.volume = (ForestVolumeSliderD.value) /100
    })
    ForestVolumeSliderD.addEventListener('mouseleave', () => {
            ForestSoundOn.forEach(element => {
                element.disabled = false
            });
        })


    // PÁGINA LIGHT
    RainVolumeSliderL.addEventListener('change', () => {
        RainVolumeSliderD.value = RainVolumeSliderL.value
        RainSoundOn.forEach(element => {
            element.disabled = true
        });
        RainSound.volume = (RainVolumeSliderL.value) /100
    })
    RainVolumeSliderL.addEventListener('mouseleave', () => {
            RainSoundOn.forEach(element => {
                element.disabled = false
            });
        })
    // PÁGINA DARK 
    RainVolumeSliderD.addEventListener('change', () => {
        RainVolumeSliderL.value = RainVolumeSliderD.value
        RainSoundOn.forEach(element => {
            element.disabled = true
        });
        RainSound.volume = (RainVolumeSliderD.value) /100
    })
    RainVolumeSliderD.addEventListener('mouseleave', () => {
            RainSoundOn.forEach(element => {
                element.disabled = false
            });
        })

    // PÁGINA LIGHT
    CoffeeVolumeSliderL.addEventListener('change', () => {
        CoffeeVolumeSliderD.value = CoffeeVolumeSliderL.value
        CoffeeSoundOn.forEach(element => {
            element.disabled = true
        });
        CoffeeSound.volume = (CoffeeVolumeSliderL.value) /100
    })
    CoffeeVolumeSliderL.addEventListener('mouseleave', () => {
            CoffeeSoundOn.forEach(element => {
                element.disabled = false
            });
        })
    // PÁGINA DARK 
    CoffeeVolumeSliderD.addEventListener('change', () => {
        CoffeeVolumeSliderL.value = CoffeeVolumeSliderD.value
        CoffeeSoundOn.forEach(element => {
            element.disabled = true
        });
        CoffeeSound.volume = (CoffeeVolumeSliderD.value) /100
    })
    CoffeeVolumeSliderD.addEventListener('mouseleave', () => {
            CoffeeSoundOn.forEach(element => {
                element.disabled = false
            });
        })

    // PÁGINA LIGHT
    FireVolumeSliderL.addEventListener('change', () => {
        FireVolumeSliderD.value = FireVolumeSliderL.value
        FireSoundOn.forEach(element => {
            element.disabled = true
        });
        FireSound.volume = (FireVolumeSliderL.value) /100
    })
    FireVolumeSliderL.addEventListener('mouseleave', () => {
            FireSoundOn.forEach(element => {
                element.disabled = false
            });
        })
    // PÁGINA DARK 
    FireVolumeSliderD.addEventListener('change', () => {
        FireVolumeSliderL.value = FireVolumeSliderD.value
        FireSoundOn.forEach(element => {
            element.disabled = true
        });
        FireSound.volume = (FireVolumeSliderD.value) /100
    })
    FireVolumeSliderD.addEventListener('mouseleave', () => {
            FireSoundOn.forEach(element => {
                element.disabled = false
            });
        })

    
    return {
        ForestSound,
        RainSound,
        CoffeeSound,
        FireSound,
        FinishSound
    }

}