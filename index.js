
function validar() {
    let isValid = false;
    const input = document.forms['form']['name'];
    const message = document.getElementById('message');
    input.willValidate = false;
    const pattern = new RegExp('^[A-Z]+$', 'i');

    if (!input.value) {
        isValid = false;
    } else {
            if (!pattern.test(input.value)) {
                isValid = false;
            } 
                else {
                    isValid = true;
                }
        }

    if (!isValid) {
        message.hidden = false;
    } else {
        message.hidden = true;
    }
    return isValid;
}



function validar2() {
    let isValid = false;
    const input = document.forms['form']['number-c'];
    const message = document.getElementById('message2');
    input.willValidate = false;
    const pattern = new RegExp('[0-9]+');

    if (!input.value) {
        isValid = false;
    } else {
            if (!pattern.test(input.value)) {
                isValid = false;
            } 
                else {
                    isValid = true;
                }
        }

    if (!isValid) {
        message.hidden = false;
    } else {
        message.hidden = true;
    }
    return isValid;
}

function verificar() {
    const valido = [validar(), validar2()] ;
    if (!valido) {
        alert('El campo no es válido.');
    } else {
        alert('El campo es válido');
    }
}