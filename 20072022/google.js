function next(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var confirm = document.getElementById('confirm').value;
    document.getElementById('allerror').innerHTML = '';
    document.getElementById('firsterror').innerHTML = '';
    document.getElementById('seconderror').innerHTML = ' ';
    document.getElementById('thirderror').innerHTML = '';
    document.getElementById('fourtherror').innerHTML = ' ';
document.getElementById('fourtherror').innerHTML = ' ';
document.getElementById('fiftherror').innerHTML = '  ';
document.getElementById('fiftherror').innerHTML = ' ';
    if ( firstname == ''){
        document.getElementById('firsterror').innerHTML = ' Enter Firstname &#10060';
        
    }
    else if( lastname ==''){
        document.getElementById('seconderror').innerHTML = 'Enter Lastname &#10060 ';
    }
    else if( username == ''){
        document.getElementById('thirderror').innerHTML = ' Enter username &#10060';
    }
    else if( password == ''){
        document.getElementById('fourtherror').innerHTML = ' Enter password &#10060';
    }
    else if( password.length < 6 ){
        document.getElementById('fourtherror').innerHTML = ' Use more than 6 charaters &#10060 ';

    }
    
    else if( confirm ==''){
        document.getElementById('fiftherror').innerHTML = ' confirm Password &#10060';
    }
    else if( confirm.length <6){
        document.getElementById('fiftherror').innerHTML = 'Enter confirm Password as same 1st &#10060';
    }
    else{
        document.getElementById('allerror').innerHTML = 'Google Account Created &#128526';
    }
    }