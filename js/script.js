document.getElementById('login-button').addEventListener('click', function(){ 
    // user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value
    // user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail == 'mahin@gmail.com' && userPassword == 'secreate'){
        console.log('valid user');
        window.location.href = 'banking.html';
    }
});
