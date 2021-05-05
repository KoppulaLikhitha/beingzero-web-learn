
var sli=document.getElementById("val");

var ou=document.getElementById("demo");

ou.innerHTML=sli.value;

sli.oninput =function(){
    ou.innerHTML=this.value;
}

var sli1=document.getElementById("val1");

var ou1=document.getElementById("demo1");

ou1.innerHTML=sli1.value;

sli1.oninput =function(){
    ou1.innerHTML=this.value;
}

var sli2=document.getElementById("val2");

var ou2=document.getElementById("demo2");

ou2.innerHTML=sli2.value;

sli2.oninput =function(){
    ou2.innerHTML=this.value;
}


var ou3=document.getElementById("cli");

ou3.innerHTML=sli.value+ "  " + sli1.value +"  "+ sli2.value ;
