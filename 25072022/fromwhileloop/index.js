var lilist = document.querySelectorAll('li');
var i = 0;
while(i < lilist.length){
if(lilist[i].innerHTML== 'Jai'){
    lilist[i].innerHTML= lilist[i].innerHTML  +',In class' ;
}
i++;
}