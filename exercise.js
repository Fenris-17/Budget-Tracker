function click(){
 var myContent={
    document.getElementById("result").value;
    localStorage.setItem("myContent",myContent);
 }
 function myLoad(){
    var myContent =localStorage.getItem("myContent");
    document.getElementById("textarea".value)=myContent;
 }