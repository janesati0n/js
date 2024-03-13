/* old way
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
} */

/* new way
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
} */

function greet(person, msg = "Hey there", punc = "!") { //order matters!
    console.log(`${msg}, ${person}${punc}`)
}

