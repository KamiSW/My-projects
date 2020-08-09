const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const btnClear = document.querySelector(".clear");
const btnSend = document.querySelector(".send");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".close");



const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');


}


const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        };
    });
};




const checkLength = (input, min) => {

    let inputLength = input.previousElementSibling.innerText
    inputLength = inputLength.slice(0, -1);


    if (input.value.length < min) {
        showError(input, `${inputLength}  musi składać się z min. ${min} znaków`)
    }

}



const checkPassword = (password, password2) => {

    if (password.value !== password2.value) {
        showError(password2, "Hasła do siebie nie pasują.");
    }

}

const checkMail = () => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
        clearError(email);

    } else {
        showError(email, "Podany adres email jest niepoprawny.");
    }

}

const checkErrors = () => {

    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {

        if (el.classList.contains('error')) {
            errorCount++;
        }


    })


    if (errorCount === 0) {
        popup.classList.add("show-popup");
    }


    console.log(errorCount);

}


btnSend.addEventListener("click", e => {
    e.preventDefault();

    checkForm([username, password, password2, email]);
    checkLength(username, 3);
    checkLength(password, 8);
    checkPassword(password, password2);
    checkMail(email);
    checkErrors();
})


btnClear.addEventListener("click", e => {
    e.preventDefault();


    [username, password, password2, email].forEach(el => {
        el.value = "";
        clearError(el);
    })

})