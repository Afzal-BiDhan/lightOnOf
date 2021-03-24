// html value target
const lightOn = document.getElementById('lightOn');
const lightOff = document.getElementById('lightOff');
const image = document.getElementById('myImage');

// add function
lightOn.addEventListener('click', () => {
    image.src='./images/on.jpg';
});

lightOff.addEventListener('click', () => {
    image.src='./images/off.jpg';
});