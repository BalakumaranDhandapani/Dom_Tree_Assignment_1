var ele=document.createElement("table");
ele.setAttribute("class","table");

var thead=document.createElement("thead");
thead.setAttribute("class","thead-dark");

var tr=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First";

var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Second";

var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Third";

var tbody=document.createElement("tbody");
tbody.setAttribute("class","tbody");

var trb=document.createElement("tr");

var tb1=document.createElement("td");
tb1.innerHTML="Mark";

var tb2=document.createElement("td");
tb2.innerHTML="Otto";

var tb3=document.createElement("td");
tb3.innerHTML="@mdo";

trb.append(tb1,tb2,tb3);
tbody.append(trb);

tr.append(th1,th2,th3);
thead.append(tr);

ele.append(thead,tbody);
document.body.append(ele);