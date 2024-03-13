/* DOM Selecting & Manipulation
getElementById
getElementsByTagName
getElementsByClassName */

/* const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    console.log(img.src)
} */

/* const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
} */


/* querySelector & querySelector All
document.querySelector('h1')
document.querySelector('#red')
document.querySelector('.big') */

document.querySelector('p') //only first paragraph in document
document.querySelector('#banner') //select by id
document.querySelector('.square') //select by class (first of)
document.querySelector('img:nth-of-type(2)') //2nd img
document.querySelector('a[title="Java"]') //a href with title Java

/* const links = document.querySelectorAll("p a") //anchor tags in paragraphs
for (let link of links) {
    console.log(link.href)
} */


//DOM Properties - innerHTML, textContent, innerText
document.querySelector('p').innerText //shows text in first paragraph
document.querySelector('p').innerText = 'lolololololo'

document.querySelector('p').textContent //with markups and hidden elements

const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!'
}

document.querySelector('h1').innerHTML //all tags included
document.querySelector('h1').innerHTML = <i>askdjas</i>
document.querySelector('h1').innerHTML += '<sup>asjdsa</sup>'

//Exercise53: Pickles
document.querySelector('span').innerText = 'Disgusting'