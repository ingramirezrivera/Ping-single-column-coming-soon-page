let inputEmail = document.getElementById('email');
let button = document.getElementById('button');

const validateEmail = (email) => {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(expReg.test(email) === true){
        console.log('Is an email');
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
        inputEmail.value = "";
    }else {
        inputEmail.style.border = '1px solid red';
        error.style.visibility = 'visible';
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail(inputEmail.value);
    console.log('clicked');
})

console.log(inputEmail.value);
console.log(button);