function colorChange(){

    let a=document.getElementById("pcolor");

    let r=document.getElementById("rs");
    let g=document.getElementById("gs");
    let b=document.getElementById("bs");

    let p=document.getElementById("rv");
    let q=document.getElementById("gv");
    let st=document.getElementById("bv");

    let s="rgb(" + r.value + "," + g.value +","+ b.value +")";

    a.innerHTML=s;
    a.style.backgroundColor = s;

    p.innerHTML= "Value : " + r.value;
    q.innerHTML= "Value : " +g.value;
     st.innerHTML= "Value : " +b.value;

}
