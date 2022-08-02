var image = ['images/image.webp','images/image1.jpg','images/image2.jpg'] ;
var text = '';
for( var g= 0 ; g < image.length; g++){
    text += '<div class="image" id="photo'+[g]+'" > <img  class="salman" src="'+image[g]+'" /> </div>'
}
document.getElementById('result').innerHTML=text;
