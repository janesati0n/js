/* const add = function (x, y) {
    return x + y;
} */

/* Higher Order Functions
function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie)
callTenTimes(rollDie) */

//Returning Functions
/* function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
        }
    }
}
const mystery = makeMysteryFunc() */


/*IN BETWEEN NUMBERS
 function isBetween(num) { //50-100 true, else false 
    return num >= 50 && num <= 100;
}

function isBetween2(num) { //1-10 true, else false 
    return num >= 1 && num <= 10;
} */

//Returning Function Version
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 17)
isChild(7) //true
isChild(40) //false

const isAdult = makeBetweenFunc(18, 64)
isAdult(29) // true
isAdult(12) // false

const isSenior = makeBetweenFunc(65, 120)
isSenior(83) //true
isSenior(20) //false