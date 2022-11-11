var x=0;
function myFunction() {
  if(x%2==0){
    x++;
  document.getElementById("idcompilers").classList.remove("classcompiler");
  document.getElementById("select-lang").innerHTML="CPP COMPILER";
  document.getElementById("idcompilers2").classList.add("classcompiler2");

}
else{
  x++;
  document.getElementById("idcompilers2").classList.remove("classcompiler2");
  document.getElementById("select-lang").innerHTML="JAVA COMPILER";
  document.getElementById("idcompilers").classList.add("classcompiler");
 
}
}

function myfun(){
  alert("Turned in")
}