let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#value');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@'; //all the items I want to allow to the passwords
let novaSenha = '';

    sizePassword.innerHTML = sliderElement.value;

    slider.oninput = function () {  //function made to show how many characters were chosen on input
        sizePassword.innerHTML = this.value;
    };

    function generatePassword() {
   
        let pass = '';
        for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
            pass += charset.charAt(Math.floor(Math.random() * n))  //first you creat the whole number,then you create the random numbers.
        }

        console.log(pass)
        containerPassword.classList.remove('hide');  //it's to remove the class hide inserted before, so you can see the password.
        password.innerHTML = pass;
        novaSenha = pass;

    };
    

    function copyPassword() {
        alert('Password copied!')
        navigator.clipboard.writeText(novaSenha);
};
    

