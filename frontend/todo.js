var myn=document.getElementsByTagName("LI");
var i;
for(i=0;i<myn.length;i++)
{
    var sp=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    sp.className="close";
    sp.appendChild(txt);
    myn[i].appendChild(sp);
}

var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++)
{
    close[i].onclick = function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}

var lis=document.querySelector('ul');
lis.addEventListener('click',function(ev)
{
    if(ev.target.tagName==='LI')
    {
        ev.target.classList.toggle('checked');
    }
}.false);

function newElement(){
    var li=document.createElement("li");
    var inval=document.getElementById("myinp").value;
    var t=document.createTextNode(inval);
    li.appendChild(t);
    if(inval===''){
        alert("You must write something");
    }
    else{
        document.getElementById("ul").appendChild(li);
    }
document.getElementById("myinp").value="";

var span=document.createElement("SPAN");
var txt=document.createTextNode('\u00D7');
span.className="close";
span.appendChild(txt);
li.appendChild(span);

for(i=0;i<close.length;i++)
{
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
}