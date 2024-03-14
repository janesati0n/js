/* TO DO LIST PROJECT
"new" - Add A Todo
"list" - List All Todos
"delete" - Remove Specific Todo
"quit" - Quit App 
*/

const todo = ["Buy New Turtle", "Collect Eggs", "Feed Chickens"]
let userInput = prompt("What would you like to do?")
while (userInput !== "quit" && userInput !== "q") {
    if (userInput === "list") {
        console.log("***************")
        console.log("To Do list:")
        for (dos of todo) {
            console.log(todo.indexOf(dos), dos)
        }
    } else if (userInput === "new") {
        addingNew = prompt("Enter new to do:")
        todo.push(addingNew)
        console.log("***************")
        console.log(`${addingNew} was added to your to do list!`)
    } else if (userInput === "delete") {
        console.log("***************")
        console.log("To Do list:")
        for (dos of todo) {
            console.log(todo.indexOf(dos), dos)
        }
        deleteItem = parseInt(prompt("Enter index of item you want to delete:"));
        if (!Number.isNaN(deleteItem)) {
            console.log(`${todo[deleteItem]} was deleted from your To Do List!`)
            todo.splice(deleteItem, 1)
        } else {
            console.log("Unknown index.")
        }
    }
    userInput = prompt("What else you like to do?")
}
console.log("***************")
console.log("Ok, you quit the app!")
