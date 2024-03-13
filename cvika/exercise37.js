/* MULTIPLE ARGS EXERCISE
isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!
 */
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("Snake Eyes!")
    }
    else
        console.log("Not Snake Eyes!")
}
