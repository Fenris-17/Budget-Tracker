
var dataBase=JSON.parse(localStorage.getItem("expenses"));
var list=document.getElementById("list");
var len=dataBase.length;
for(var i=0;i<len;i++)
{
    var expense=dataBase[i];
    var li1=document.createElement('li');
    li1.innerHTML="Subcategory : "+ expense.name;
    var li2=document.createElement('li');
    li2.innerHTML="Date : "+ expense.date;
    var li3=document.createElement('li');
    li3.innerHTML="Amount : "+ expense.amount;
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
}
