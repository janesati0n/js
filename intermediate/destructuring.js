//Destructuring Arrays
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

/* USUAL SYNTAX
const highScore = scores[0];
const secondHighScore = scores[1]; */

/* NEWER, BETTER
const [gold, silver, bronze, ...everyoneElse] = scores; */


//Destructuring Objects

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: '1930',
    died: '1978',
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

/* OLD
const firstName = user.firstName;
const lastName = user.lastName
const email = user.email; */

/* NEW
const { email, firstName, lastName, city, bio } = user;
const { born: birthYear, died: deathYear } = user; */

const user2 = {
    email: "stacy@gmail.com",
    firstName: "Stacy",
    lastName: "Gonzales",
    born: 1987,
    city: "Tulsa",
    state: "Oklahoma"
}

const { city, state, died = "N/A" } = user2;

//Destructuring Params
/* OLD
function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
} */

/* NEW
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
} */

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

//OLD movies.filter((movie) => movie.score >= 90)
//NEW movies.filter(({ score }) => score >= 90)

/* OLD
movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
}) */

/* NEW
movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
}) */