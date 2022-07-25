function login(){
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
document.getElementById('allerror').innerHTML = '';
document.getElementById('usererror').innerHTML = '';
document.getElementById('passerror').innerHTML = '';
document.getElementById('sucessfullylogin').innerHTML = '';
if ( username == '' && password == ''){
    document.getElementById('allerror').innerHTML = 'Enter username and password';
}
else if( username == ''){
    document.getElementById('usererror').innerHTML = ' Enter Username';
}
else if( password ==''){
    document.getElementById('passerror').innerHTML = 'Enter Password ';
}

else{
    document.getElementById('sucessfullylogin').innerHTML = ' SUCESSFULLY LOGIN';
}
}
