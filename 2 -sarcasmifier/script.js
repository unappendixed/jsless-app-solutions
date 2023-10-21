// write your code here
// you might want to also clear the user's input after they hit submit in addition to returning the sarcasmified text
// as an additional challenge, try to make it also work if the user presses Enter while typing in the field

const inputField = document.querySelector("input");
const submitButton = document.querySelector("button");
const outputElement = document.querySelector("#output");

function sarcasmify(text) {
    // we turn our input string into an array
    let inputList = new Array(...text);

    // iterate over the array and transform each character based on its index
    const outputString = inputList.map((e, i) => {
        // uppercase every other character
        if (i % 2) {
            return e.toUpperCase()
        }
        // otherwise return it unaltered
        return e.toLowerCase();
        // join the whole returned array back together into a string
    }).join("");
    return outputString
}

// here we register an inline function as an event listener on the button
submitButton.addEventListener("click", e => {
    // we don't want any default browser behaviour mucking us up
    e.preventDefault();
    // get the value of the input field and store it in a variable
    const userInput = inputField.value;
    // reset the input field to an empty string
    inputField.value = "";
    // run our sarcasmify function and set the output text to its return value
    outputElement.innerText = sarcasmify(userInput);
} )
