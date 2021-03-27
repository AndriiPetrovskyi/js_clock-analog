setInterval(setClock, 1000);

const refs = {
    seconds: document.querySelector('.second'),
    minute: document.querySelector('.minute'),
    hour: document.querySelector('.hour'),
}
console.log(refs.seconds)

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60; 
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; 
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    
    setRotation(refs.seconds, secondsRatio);
    setRotation(refs.minute, minutesRatio);
    setRotation(refs.hour, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}