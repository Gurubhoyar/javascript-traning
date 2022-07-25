

function button() {
    var number1 = parseInt(document.getElementById('n1').value);
    var number2 = parseInt(document.getElementById('n2').value);
    var result ;
    if (number1 > number2) {
        result = number1 +"greater" + number2;
    }
    else if ( number1 < number2){
        result = number1 +"lesser" + number2;
    }
    else {
        result = " both numbers are equal";
    }
    document.getElementById('result').innerHTML = result;
}
function multi() {
    var number3 = parseInt(document.getElementById('n3').value);
    var number4 = parseInt(document.getElementById('n4').value);
    var ans ;
    if (number3 * number4) {
        ans = number3 * number4;
    }
   
    else {
        ans = "not o/p";
    }
    document.getElementById('output').innerHTML = ans;
}