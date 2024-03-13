/* Some/Every Exercise
allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,2,3]) //false */

const allEvens = numbers => (
    numbers.every(number => number % 2 === 0)
)
