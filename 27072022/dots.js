var images = ['image/pic.png','image/p2.jpg','image/p3.jpg','image/p4.jpg',];
document.getElementById('result').innerHTML = '<img id="image0" data-photo="0" src="' + images[0] + '" />';

var dots = '';
for (var i = 0 ; i < images.length; i++) {
    dots += '<span onclick="showslide('+i+')" class=" divslide" > '+i+' </span>'
}
document.getElementById('dots').innerHTML=dots;

function showslide(guru){
    document.getElementById('result').innerHTML = '<img id="image' +(guru)+'"  data-photo="' +(guru)+ '" src="' + images[(guru)] + '" />'
}

function next() {
    var currentimg = parseInt(document.querySelectorAll('#result img ')[0].dataset.photo);
    document.getElementById('result').innerHTML = '<img id="image' +(currentimg + 1)+'"  data-photo="' +(currentimg + 1)+ '" src="' + images[(currentimg + 1)] + '" />'

}
function prev() {
    var currentimg = parseInt(document.querySelectorAll('#result img ')[0].dataset.photo);
    document.getElementById('result').innerHTML = '<img id="image' +(currentimg - 1)+ '"  data-photo="' +(currentimg - 1)+ '" src="' + images[(currentimg - 1)] + '" />'

}