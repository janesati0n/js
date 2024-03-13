//Rainbow Text Exercise
/* works, but lets's do it little more fancy
document.querySelector('span:nth-of-type(1)').style.color = "red"
document.querySelector('span:nth-of-type(2)').style.color = "orange"
document.querySelector('span:nth-of-type(3)').style.color = "yellow"
document.querySelector('span:nth-of-type(4)').style.color = "green"
document.querySelector('span:nth-of-type(5)').style.color = "blue"
document.querySelector('span:nth-of-type(6)').style.color = "indigo"
document.querySelector('span:nth-of-type(7)').style.color = "violet" */

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const letters = document.querySelectorAll("h1 span")
for (let i = 0; i < letters.length; i++) {
    letters[i].style.color = colors[i]
}