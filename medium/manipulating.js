/* Atributes
document.querySelector('#banner').id = 'whoops' //will change id and (possibly) mess up the styles (in css)

.src //source (of img)
.href

.getAttribute //from html not JS! */


/* Changing Styles
.style // all css-like properties (not from stylesheet, but inline)
 font-size (css) >>> fontSize (js)
h1.style.color = 'green'  //all inputs has to be strings
h1.style.style.fontSize = '3em'
h1.style.border = '2px solid pink' */

const links = document.querySelectorAll('a');
for (let link of links) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

/* Search Window Defaults (element object)
window.getComputedStyle(h1).color //"rgb(128, 128, 0)"
window.getComputedStyle(h1).fontSize //"32px"
window.getComputedStyle(h1).fontFamily //"Times" */


//classList
const h2 = document.querySelector('h2')
h2.classList.add('purple')
h2.classList.add('border')
h2.classList.remove('border')
h2.classList.contains('border') //false
h2.classList.toggle('purple') //false
h2.classList.toggle('purple') //true


//Traversing parent/child/sibling
const firstBold = document.querySelector('b')
firstBold.parentElement //<p>...</p>
firstBold.parentElement.parentElement //<body>...</body>
firstBold.parentElement.parentElement.parentElement //<html>...</html>
const paragraph = firstBold.parentElement
paragraph.children //HTML Collection(8) [b, b, a, a, a, a, a, a]
paragraph.children[0] //<b>Silkie</b>

const squareImg = document.querySelector('.square')
squareImg.parentElement //<body>...</body>
squareImg.nextSibling //#text (blank)
squareImg.nextElementSibling //#square


//append & appendChild
/* const newImg = document.createElement('img'); //<img>
newImg.src = https://images.unsplash.com/photo-1517849845537-4d257902454a;
document.body.appendChild(newImg);
newImg.classList.add('square') */

const newH3 = document.createElement('h3')
newH3.innerText = 'I am new!'
document.body.appendChild(newH3)

const p = document.querySelector('p')
p.append("I am new text yaaaaaayyyy!!!")

const newB = document.createElement('b')
newB.append('Hi!')
newB.prepend(newB)

Element.insertAdjacentElement(position, element);
/* Position (DOMString)
beforebegin = before the targetElement
afterbegin = before the first child of the targetElement
beforeend = after the last child of the targetElement
afterend = after targetElement */

/* const h2 = document.createElement('h2')
h2.append('Are adorable chickens')
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h2) */

/* const h3 = document.createElement('h3')
h3.innerText = 'I am h3';
h1.after(h3) */


//Removing elements
const firstLi = document.querySelector('li')
const ul = firstLi.parentElement //ul
ul.removeChild(firstLi)

const b = document.querySelector('b')
b.parentElement.removeChild(b)

/* newer better syntax, don't work on IE
const img = document.querySelector('img')
img.remove() */