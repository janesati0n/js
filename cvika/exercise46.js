/* Egg Laying Exercise
hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2 */

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
}