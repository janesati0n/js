//100 Button Insanity Exercise

const container = document.querySelector('#container')

for (let i = 0; i < 100; i++) {
    const button = document.createElement('button')
    button.innerText = 'Hey!'
    container.appendChild(button);
}