const emailformat  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const message1 = 'You not input any email address letters in blank';
const message2 = 'Please provide a valid email address';
const message3 = 'Thank you for subscribe!\nIf we launched this app, we send notification mail to your email address.';

const errormsg = document.createElement('p');
errormsg.classList.add('container__form__message');

function addresscheck() {
    var address = document.querySelector('[name="email"]').value;
    if (address.match(emailformat)) {
        return 1
        }
    else {
        return 0
    }
}

function address_submit() {
    var address = document.querySelector('[name="email"]').value;
    
    if (address == "") {
        outputmessage(message1);
        }

    else if (addresscheck() == 0) {
        outputmessage(message2);
        }

    else {
        alert(message3);
    }
    return 
}

function outputmessage(self) {
    var address = document.querySelector('[name="email"]').value;
    var formbox = document.querySelector('form');
    var message;

    message = document.createTextNode(self);
    errormsg.appendChild(message);
    formbox.appendChild(errormsg);
    document.body.insertBefore(errormsg, formbox);

    var changeborder = document.getElementsByName('email');
    changeborder.style.border = "1px solid hsl(354, 100%, 66%)";
}