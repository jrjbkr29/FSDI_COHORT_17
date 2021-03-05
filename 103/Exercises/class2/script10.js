
var x=0;
function Counter(){
    x++;
    document.getElementById("counter").innerHTML=`<p class="alert"> Counter:${x} <p>`;
}