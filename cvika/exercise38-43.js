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

/*  SHORTS WEATHER FUNCTION
isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75) //true */

/* function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else
        return false;
} */

/* LAST ELEMENT EXERCISE
lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null */

function lastElement(aranya) {
    if (aranya.length === 0) {
        return 'null';
    } else
        return aranya.slice(aranya.length - 1);
}

/*  CAPITALIZE EXERCISE
capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid" */

/* function capitalize(myInput) {
    let capital = myInput[0].toUpperCase()
    let rest = myInput.slice(1)
    return capital + rest;
} */

/* SUM ARRAY EXERCISE
sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101 */

/* function sumArray(aranya) {
    let total = 0;
    for (let i = 0; i < aranya.length; i++) {
        total += aranya[i];
        console.log(`Adding ${aranya[i]} to your ${total}.`);
    }
    return total;
} */


/* DAYS OF THE WEEK EXERCISE
returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null */

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function returnDay(index) {
    if (index >= 1 && index <= 7) {
        return daysOfWeek[index - 1];
    } else
        return "null";
}