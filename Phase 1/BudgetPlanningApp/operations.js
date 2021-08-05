 function addData() {
        var empObj1 = JSON.parse(localStorage.getItem("empObj") || "[]");
        var ClientName = document.getElementById("clientname").value;
        var ProjectName = document.getElementById("projectname").value;
        var Budget = document.getElementById("budget").value;
        var emp = {name:ClientName, pjname:ProjectName, budg:Budget};
        empObj1.push(emp);
        localStorage.setItem("empObj",JSON.stringify(empObj1));
     }
    


function displayData() {

        var empObj = JSON.parse(localStorage.getItem("empObj") || "[]");

        var tableContent=""
        let sum =0;
        var startTable ="<table border=1 align=center ><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"
 
        empObj.forEach(n => {
            tableContent += "<tr><td>"+ n.name + "</td> <td>" + n.pjname + "</td> <td>"+ n.budg+"</td> </tr>";
            console.log("name is "+n.name);
            sum +=eval(n.budg);
            
        });
        
        var endTable="</table >"
        tableContent = startTable+tableContent+endTable
        document.getElementById("FTbody").innerHTML=tableContent;
        
        console.log("<h2>Total Budget is </h2>"+sum);


        var myPTag = document.createElement("p");
        var myPTagContent = document.createTextNode("The total budget is "+ sum);
        myPTag.appendChild(myPTagContent);
        document.getElementById("FTbodySum").appendChild(myPTag);
        

        
    }



