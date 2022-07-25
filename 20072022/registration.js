function button(){
    var username = document.getElementById('username').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var country = document.getElementById('country').value;
    var zip = document.getElementById('zip').value;
   
    document.getElementById('addresserror').innerHTML = '';
    document.getElementById('mailerror').innerHTML = '';
    document.getElementById('noerror').innerHTML = '';
    document.getElementById('countryerror').innerHTML = ' ';
    document.getElementById('ziperror').innerHTML = '';
    document.getElementById('allerror').innerHTML = '';
    if ( username == ''){
        document.getElementById('usererror').innerHTML = ' Enter username';
        
    }
    else if( address ==''){
        document.getElementById('addresserror').innerHTML = 'Enter address ';
    }
    else if( email == ''){
        document.getElementById('mailerror').innerHTML = ' Enter valid mail';
    }
    else if( mobile == ''){
        document.getElementById('noerror').innerHTML = ' Enter mobile number';
    }
    
    else if( country ==''){
        document.getElementById('countryerror').innerHTML = 'Enter your current country ';
    }
    else if( zip ==''){
        document.getElementById('ziperror').innerHTML = 'Enter zip code ';
    }
    else{
        document.getElementById('allerror').innerHTML = 'Submitted form';
    }
    }