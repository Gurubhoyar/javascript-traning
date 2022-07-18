function addition(){
    var number1 = parseInt( document.getElementById('number1').value);
    var number2 = parseInt( document.getElementById('number2').value);
    var sum =number1 + number2;
    document.getElementById('result').innerHTML = sum;
}
function substraction() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var sum =number1 - number2;
    document.getElementById('result').innerHTML = sum;
}
function multiplication() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var sum =number1 * number2;
    document.getElementById('result').innerHTML = sum;
}
function division() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var sum =number1 / number2;
    document.getElementById('result').innerHTML = sum;
}
