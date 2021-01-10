function contactUs(){
    document.querySelector('#contact-button').innerText = "PLEASE WAIT"
    let type = 'sales';
    let userName =  document.querySelector('#form_name').value;
    let emailId =  document.querySelector('#form_email').value;
    let contactNumber = 0000000000;
    let textMessage = document.querySelector('#form_message').value;;

    let data = new FormData();
    data.append('requesttype', type);
    data.append('name', userName);
    data.append('email', emailId);
    data.append('number', contactNumber);
    data.append('message', textMessage);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://mail.google.com/mail/u/0/#inbox', true);
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
        document.querySelector('#contact-button').innerText = "MESSAGE SENT";
        document.querySelector('#form_name').form.reset();
    };
    xhr.send(data);
}