function greater(){
    var number1 = parseInt(document.getElementById('n1').value);
    var number2 = parseInt(document.getElementById('n2').value);
    var result = (number1 > number2)? number1 + ' is greater than '+ number2 : number2 + ' is greater than '+ number1;
    document.getElementById('result').innerHTML = result; 
}
function less(){
    var number1 = parseInt(document.getElementById('n1').value);
    var number2 = parseInt(document.getElementById('n2').value);
    var result = (number1 < number2)? number1 + ' is less than '+ number2 : number2 + ' is less than '+ number1;
    document.getElementById('result').innerHTML = result; 
}
function equal(){
    var number1 = parseInt(document.getElementById('n1').value);
    var number2 = parseInt(document.getElementById('n2').value);
    var result = (number1 == number2)? number1 +' is equal to'+ number2: number2 +' is not equal to ' + number1;
    document.getElementById('result').innerHTML = result; 
}
function notequal(){
    var number1 = parseInt(document.getElementById('n1').value);
    var number2 = parseInt(document.getElementById('n2').value);
    var result = (number1 != number2)? number1 + ' = is not equal to = '+ number2 : number2 + ' = is equal to = '+ number1;
    document.getElementById('result').innerHTML = result; 
}