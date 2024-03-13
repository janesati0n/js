/* const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 575,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
} */

const person = {
    firstName: 'Mick',
    lastName: 'Jagger'
}

const kitchenSink = {
    favNum: 92319023,
    isFunny: true,
    colors: ['red', 'orange']
}

//accessing data out of objects
person["lastName"] //"Jagger"
kitchenSink["colors"] // (2) ['red', 'orange']
person.lastName //"Jagger"

//using variables - every key in object will turn into STRING
const years = { 1999: 'GOOD', 2020: 'BAD' }
years["1999"] //"GOOD"
years[1999] //"GOOD"

//modifying objects
const midterms = { danielle: 96, thomas: 78 }
midterms //{danielle: 96, thomas 78}
midterms.thomas = 79 //will change to 79
midterms //{danielle: 96, thomas 79}
midterms.thomas = 'C+'
midterms['Danielle'] = 'A'
miternms //{danielle: "A", thomas: "C+"}

//nesting arrays & objects
const comments = [
    { username: 'Tammy', text: 'asdasdasdasd', votes: 9 }
    { username: 'FishBoi', text: 'glub glub', votes: 12387 }
]
comments[1].text //"glub glub"
