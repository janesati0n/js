//The onclick Property
const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log("You clicked me!")
    console.log("I hope it worked!")
}

function scream() {
    console.log("AAAAAAHHHH")
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1')
}


//addEventListener
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert("Clicked!")
})

function twist() {
    console.log("TWIST!")
}

function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas')

/* not working, will show the latter only
tasButton.onclick = twist;
tasButton.onclick = shout; */

tasButton.addEventListener('click', twist, { once: true })
tasButton.addEventListener('click', shout)
