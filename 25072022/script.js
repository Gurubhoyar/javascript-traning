var lilist = document.querySelectorAll('li');
for(i = 0; i< lilist.length; i++)
if(lilist[i].innerHTML== 'Amit'){
    lilist[i].innerHTML= lilist[i].innerHTML  +',start learning' ;
}
else if(lilist[i].innerHTML== 'Guru'){
    lilist[i].innerHTML= lilist[i].innerHTML  +', Absent today';
}
