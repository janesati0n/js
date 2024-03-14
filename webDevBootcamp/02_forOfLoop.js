const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

//for loop as usual
/* for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
} */


//for...of loop
/* for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`)
} */


//seatingChart revisited with for...of loop
/* const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
} */


/* for (let char of "hello world") {
    console.log(char)
} */


//exercise34
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* for (let num of numbers) {
    let square = Math.pow(num, num)
    console.log(square);
} */

for (let num of numbers) {
    let multiply = num * num
    console.log(multiply);
}

