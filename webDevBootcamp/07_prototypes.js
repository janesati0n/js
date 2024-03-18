/* Array.prototype
String.prototype.grumpus = () => alert("GO AWAY!")
const cat = "Blue"
cat.grumpus() */

String.prototype.yell = function () { //adds new function to object
    return `OMG!!! ${this.toUpperCase()}!!!! AGHGHGHGHG!`;
}

Array.prototype.pop = function () { //replace function in object
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!'
}

/* __proto__ = reference
dog.__proto__ */
