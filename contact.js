function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var emailBody = 'Name: ' + name + '%0D%0A' +
                    'Email: ' + email + '%0D%0A' +
                    'Message: ' + message;

    var mailtoLink = 'mailto:david@mnkr.cc?subject=Contact Form Submission&body=' + emailBody;
    window.location.href = mailtoLink;
}
