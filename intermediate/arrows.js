// Arrow Functions
const add = (x, y) => {
    return x + y;
}

const square = num => {
    return num ** 2;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

/* Exercise48: Arrow Functions
const greet = name => {
    return `Hey ${name}!`
} */

/* Arrow Function Implicit Returns
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => a + b */

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

//Keyword This inside Arrow Functions
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}

/* this behave differently in arrow functions than in normal functions
(can't interchange fullName and shoutName) */