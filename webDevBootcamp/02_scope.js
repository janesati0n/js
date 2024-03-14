/* SCOPE FUNCTION
function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs)
} */

/* BLOCK SCOPE
let radius = 8;
if (radius > 0) {
    const PI = 3,14159;
    let msg = 'HIII!'
} */ //console.log(PI) && console.log(msg) === ERROR

/* for (var i = 0; i < 5; i++) {
    var msg = "ASKLDJAKLSJD"; //VAR instead of LET
    console.log(msg)
} */


//LEXICAL SCOPE
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE, HELP US, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();
}
