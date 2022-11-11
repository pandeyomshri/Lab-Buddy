function myFunction() {
  location.replace("https://www.w3schools.com")
}
let x=document.getElementsByClassName("active-assignments-tabs")
console.log(x);
for(var i=0;i<x.length;i++){
  // let y=document.getElementsByClassName("active-assignments-tabs")
  // console.log(x[i]);
  x[i].addEventListener("click", function() {
    window.location.replace("../student_list/index.html");
  }); 
}
function myFun(){
  window.location.reload();
}