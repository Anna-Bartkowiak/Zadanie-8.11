var mojaLista=document.getElementById('list');
var mojButton=document.getElementById('addElem');
/*function dodawanieDoListy() {
  console.log('Kliknelam button');
}*/
//console.log(mojaLista);
//console.log(mojButton);
mojButton.addEventListener('click', function dodawanieDoListy() {
  var wszystkieElementy_li = document.getElementsByTagName('li'); 
  var dlugosclisty = wszystkieElementy_li.length; 
  mojaLista.innerHTML += '<li>item '+dlugosclisty+'</li>';
  console.log('zmienn dlugosclisty: ' + dlugosclisty);
  console.log('cos: ' + mojaLista.innerText);
 
});