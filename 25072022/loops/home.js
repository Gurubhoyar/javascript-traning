var list = ['Guru', 'Mayur', 'Amit', 'Nitesh']
list.push('Jai')
list.sort()
document.getElementById('list1').innerHTML = list;



var list1 = [2, 5, 3, 4,]
list1.push('1')
list1.sort()
document.getElementById('list2').innerHTML = list1;


var list2 = ['java ', 'html', ' css']
list2.shift()
list2.unshift('scss', 'script')
document.getElementById('list3').innerHTML = list2;

var list3 = ['java ', 'html', ' css']
list3.pop()
document.getElementById('list4').innerHTML = list3;