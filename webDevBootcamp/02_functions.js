/*
function greet(firstName) { //firstName = parameter
    console.log(`Hey there, ${firstName}!`) //'Elvis' = argument
}
 */
/*
function rant(message) {
    console.log(`${message}`.toUpperCase())
    console.log(`${message}`.toUpperCase())
    console.log(`${message}`.toUpperCase())
}
rant("I hate beets")
*/

/* function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.!`)
}
greet("George", "Clooney")
 */


function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
}
repeat('$', 5) //$$$$$


/*
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("Snake Eyes!")
    }
    else
        console.log("Not Snake Eyes!")
} */

//RETURN KEYWORD
/* function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
} */


/* RETURN VALUE PRACTICE
multiply(2,3) // 6
multiply(9,9) // 81
multiply(5,4) // 20 */

/* function multiply(num1,num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return num1 * num2;
} */
