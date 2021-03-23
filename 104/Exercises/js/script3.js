var links = document.getElementsByTagName("a");
console.log(links);

var menu=document.getElementsByClassName('menu');
console.log(menu);

var h1 = document.getElementById('coffee-title');
var h2 = document.querySelector('.header-text h2');
console.log(h2);

//select the a (about us)

var aboutUs = document.querySelector('nav .menu');
console.log(aboutUs);

var p = document.createElement("p");
console.log(p);
var text=document.createTextNode('Hello world');
console.log(text);
p.appendChild(text);
console.log(p);
document.querySelector(".site-header").appendChild(p);
function Add(){
    var userName = document.getElementById('inputName').value;
    var li = document.createElement("li");
    var text = document.createTextNode(userName);
    li.appendChild(text);
    document.getElementById('names').appendChild(li);
    document.getElementById('inputName').value = "";
}
