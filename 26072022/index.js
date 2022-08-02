var image = ['images/image.webp', 'images/image1.jpg', 'images/image2.jpg'];
document.getElementById('result').innerHTML = '<img id="image0" data-photo="0" src="' + image[0] + '" />';

function next() {
    var currentimg = parseInt(document.querySelectorAll('#result img ')[0].dataset.photo);
    document.getElementById('result').innerHTML = '<img id="image' +(currentimg + 1)+'"  data-photo="' +(currentimg + 1)+ '" src="' + image[(currentimg + 1)] + '" />'

}
function prev() {
    var currentimg = parseInt(document.querySelectorAll('#result img ')[0].dataset.photo);
    document.getElementById('result').innerHTML = '<img id="image' +(currentimg - 1)+ '"  data-photo="' +(currentimg - 1)+ '" src="' + image[(currentimg - 1)] + '" />'

}