const display = document.getElementById("display")

let num1 = "";
let mathOp = "";
let num2 = "";

function appendToDisplay(input) {
    let cDisplay = display.value += input;
    
    if (mathOp === "" && !["+", "-", "*", "/"].includes(input)) {                               //No math operator or numbers
        num1 += input;
        console.log("Num1 Added")
    } 

    if (mathOp === "" && ["+", "-", "*", "/"].includes(input)) {                                 //Operator is chosen while mathOp is empty
        mathOp = input;
        console.log("Math Op Added")
    } 

    if (mathOp !== "" && num1 !== "" && !["+", "-", "*", "/"].includes(input)) {                //Make num2
        num2 += input;
        console.log("Num2 Added")
    }

    if (mathOp !== "" && num2 !== "" && ["+", "-", "*", "/"].includes(input)) {                 //Operation is chosen while operator mathOp exist and does the math in operation function
        operation(input)
        console.log("Switch to operation function")

    } 
    
    if (num1 !== "" && mathOp !== "" && num2 == "" && ["+", "-", "*", "/"].includes(input)) {   //If user changes math operator
        mathOp = input
        cDisplay = display.value = num1 + input
        console.log("Input Change")
    } 
}

function operation(input) {

        if (mathOp === "+") {
            console.log("Function 2 " + input)
            cDisplay = display.value = Number(num1) + Number(num2) + input
            num1 = Number(num1) + Number(num2)
            num2 = "";
            mathOp = input
        } else if (mathOp === "-") {
            console.log("Function 2 " + input)
            cDisplay = display.value = Number(num1) - Number(num2) + input
            num1 = Number(num1) - Number(num2)
            num2 = "";
            mathOp = input
        } else if (mathOp === "*") {
            console.log("Function 2 " + input)
            cDisplay = display.value = Number(num1) * Number(num2) + input
            num1 = Number(num1) * Number(num2)
            num2 = "";
            mathOp = input
        } else if (mathOp === "/") {
            console.log("Function 2 " + input)
            cDisplay = display.value = Number(num1) / Number(num2) + input
            num1 = Number(num1) / Number(num2)
            num2 = "";
            mathOp = input
        }

}

function clearDisplay() {
    display.value = "";
    num1 = "";
    mathOp = "";
    num2 = "";
}


//Extras
//Delete single character button
    // You could add a previous Input button
    //Read what the previous input is
    //Delete previous input from disply maybe with cDisplay -= prevInput
    //Update the internal numbers or operator to match the cDisplay

//History
    //Display history probably with cDisplay = display.value += input;
    //Only update history when a number or operator is confirmed
