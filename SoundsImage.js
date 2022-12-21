import { Sounds } from "./Sounds.js"

const sounds2 = Sounds()

export function SoundIcon ({
    ForestSoundOff,
    ForestSoundOn,
    RainSoundOff,
    RainSoundOn,
    CoffeeSoundOff,
    CoffeeSoundOn,
    FireSoundOff,
    FireSoundOn
}) {
    function ForestOn () {
        ForestSoundOff.forEach(element => {

            element.addEventListener('click', () => {
            ForestSoundOff.forEach(element2 => {
                element2.classList.add('none')
            });
            ForestSoundOn.forEach(element3 => {
                element3.classList.remove('none')
            });
            sounds2.ForestSound.play()
            
        });
    })}
    function ForestOff () {
        ForestSoundOn.forEach(element => {
            element.addEventListener('click', () => {
            ForestSoundOn.forEach(element2 => {
                element2.classList.add('none')
            });
            ForestSoundOff.forEach(element3 => {
                element3.classList.remove('none')
            });
            sounds2.ForestSound.pause()
        });
    })}
    
    function RainOn () {
        RainSoundOff.forEach(element => {

            element.addEventListener('click', () => {
            RainSoundOff.forEach(element2 => {
                element2.classList.add('none')
            });
            RainSoundOn.forEach(element3 => {
                element3.classList.remove('none')
            });
            sounds2.RainSound.play()
            
        });
    })}
    function RainOff () {
        RainSoundOn.forEach(element => {
            element.addEventListener('click', () => {
            RainSoundOn.forEach(element2 => {
                element2.classList.add('none')
            });
            RainSoundOff.forEach(element3 => {
                element3.classList.remove('none')
            });
            sounds2.RainSound.pause()
        });
    })}
    
    function CoffeeOn () {
        CoffeeSoundOff.forEach(element => {

            element.addEventListener('click', () => {
            CoffeeSoundOff.forEach(element2 => {
                element2.classList.add('none')
            });
            CoffeeSoundOn.forEach(element3 => {
                element3.classList.remove('none')
            });
            sounds2.CoffeeSound.play()
            
        });
    })}
    function CoffeeOff () {
        CoffeeSoundOn.forEach(element => {

            element.addEventListener('click', () => {
            CoffeeSoundOn.forEach(element2 => {
                element2.classList.add('none')
            });
            CoffeeSoundOff.forEach(element3 => {
                element3.classList.remove('none')
            });
            sounds2.CoffeeSound.pause()
            
        });
    })}
    
    function FireOn () {
        FireSoundOff.forEach(element => {

            element.addEventListener('click', () => {
            FireSoundOff.forEach(element2 => {
                element2.classList.add('none')
            });
            FireSoundOn.forEach(element3 => {
                element3.classList.remove('none')
            });
            sounds2.FireSound.play()
            
        });
    })}
    function FireOff () {
        FireSoundOn.forEach(element => {

            element.addEventListener('click', () => {
            FireSoundOn.forEach(element2 => {
                element2.classList.add('none')
            });
            FireSoundOff.forEach(element3 => {
                element3.classList.remove('none')
            });
            sounds2.FireSound.pause()
            
        });
    })}

    return {
        ForestOff,
        ForestOn,
        RainOff,
        RainOn,
        CoffeeOff,
        CoffeeOn,
        FireOff,
        FireOn
    }
}