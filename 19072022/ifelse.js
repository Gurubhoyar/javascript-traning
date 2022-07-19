

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