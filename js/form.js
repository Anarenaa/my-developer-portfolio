(emailjs => {
    emailjs.init('HAwR8wHBrT9taCCkC');
})(emailjs);

document.querySelector('.contact__form').addEventListener('submit', function(event) {
    event.preventDefault();

    let error = validation();

    if(error === 0) {
        emailjs.sendForm('service_utzgb0p', 'template_ywslrtr', this)
        .then(function() {
            const formFields = document.querySelectorAll('.contact__field');
            formFields.forEach(field => field.value = '');

            alert('Повідомлення успішно надіслано!');
        }, function(error) {
            alert('Сталася помилка: ' + error);
        });
    }
});

function validation() {
    let error = 0;
    let reqFields = document.querySelectorAll('._req');

    const errorEmailMessage = document.querySelector('.contact__error-field-message-email');

    for (let index = 0; index < reqFields.length; index++) {
        const input = reqFields[index];
        formRemoveError(input);
        
        
        if(input.value === '') {
            formAddError(input);
            error++;
        } else if(input.classList.contains('_email')){
            if(emailTest(input)) {
                formAddError(input);
                errorEmailMessage.innerText = 'Sorry, invalid format here';
                error++;
            }
        }
    }

    return error;
}

function formAddError(input){
    input.parentElement.classList.add('error');
}
function formRemoveError(input){
    input.parentElement.classList.remove('error');
}
function emailTest(input) {
    if(input.value !== '') {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    return false;
}