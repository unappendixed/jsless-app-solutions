// this implementation only allows two numbers, one before clicking an operation and one after
// it also restricts the number of input and output characters with little regard for correctness
// e.g. multiplying 999999 x 999999 will simply show the first 10 decimal places.

const output = document.querySelector("#output")

const numbers = new Array(...document.querySelectorAll(".numbers > button"));
const ops = new Array(...document.querySelectorAll(".operations > button"));

const addBtn = document.querySelector("#add");
const multBtn = document.querySelector("#mult");
const equalBtn = document.querySelector("#equal");

const emptyOutput = "0000000000"

let firstInput = "";
let secondInput = "";
let currentOperation;

function leftpad(text, character, count) {
    let padding = ""
    let numberToGenerate = count - text.length
    if (numberToGenerate <= 0) return;

    for (let i = 0; i < numberToGenerate; i++) {
        padding += character;
    }

    return padding + text;
}
const padZeroes = (text) => leftpad(text, "0", 10);

function add(first, second) {
    first = parseInt(first)
    second = parseInt(second);
    return first + second;
}

function multiply(first, second) {
    first = parseInt(first)
    second = parseInt(second)
    return first * second;
}

function execute(func) {
    let result = func(firstInput, secondInput).toString();
    return result.substring(result.length, result.length - 10);
}

numbers.forEach(button => button.addEventListener("click", e => {

    const newText = e.target.innerText;


    if (currentOperation && secondInput.length < 9) {
        secondInput += newText;
        output.innerText = padZeroes(secondInput);
    } else if (firstInput.length < 9) {
        firstInput += newText;
        output.innerText = padZeroes(firstInput);
    }
}
))

addBtn.addEventListener("click", e => {
    if (firstInput == "") return;
    currentOperation = add;
    if (output.innerText == firstInput) {
        output.innerText = emptyOutput;
    }
})

multBtn.addEventListener("click", e => {
    if (firstInput == "") return;
    currentOperation = multiply;
    if (output.innerText == firstInput) {
        output.innerText = emptyOutput;
    }
})

equalBtn.addEventListener("click", e => {
    if (firstInput == "") return;
    const result = execute(currentOperation);
    currentOperation = null;
    firstInput = "";
    secondInput = "";
    output.innerText = padZeroes(result);
})