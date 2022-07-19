function jsinfo() {
    var information = "this is java script";

    (document.getElementById('jsinfo').innerHTML == ' ')
    ?
    document.getElementById('jsinfo').innerHTML = information : 
    document.getElementById('jsinfo').innerHTML = ' ';
}
function info() {
    document.getElementById('text').style.display = 'block';
    document.getElementById('text').style.backgroundColor = 'gray';
    document.getElementById('text').style.padding = '20px';
    document.getElementById('text').style.border = '10px solid red';
}