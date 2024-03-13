//Spread in Function Calls
Math.max(13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456) //53456
Math.min(2, 5, 1) //1

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456]
Math.max(nums) //NaN
Math.max(...nums) //53456
Math.min(...nums) //1

console.log(nums) //(13) [13, 4, 5... 53456]
console.log(...nums) //13 4 5 21 3 3 1 2 7 6 4 2 53456
console.log("hello") //hello
console.log(..."hello") //h e l l o


//Spread in Array Literals
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs]


//Spread with Objects
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' }

const catDog = { ...feline, ...canine }
//order matters = family will be set to Caninae (what comes last wins)

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

//Rest Params
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneElse}`)
}

