// write your code below
// 

const button = document.querySelector("#self-destruct");

button.addEventListener('click', () => {
    new Array(...document.body.childNodes).forEach( elem => elem.remove());
})
