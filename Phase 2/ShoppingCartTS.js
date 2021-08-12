function addData(item_name, item_price) {
    var empObj1 = JSON.parse(localStorage.getItem("empObj") || "[]");
    //  let InputName =(<HTMLInputElement>document.getElementById(item_name)).value;
    var emp = { name: item_name, price: item_price };
    empObj1.push(emp);
    window.localStorage.setItem("empObj", JSON.stringify(empObj1));
    document.getElementById("cart_size").innerHTML = "" + empObj1.length;
    return false;
}
function removeData() {
    // sessionStorage.removeItem("obj1");
    localStorage.removeItem("empObj");
    var empObj1 = JSON.parse(localStorage.getItem("empObj") || "[]");
    document.getElementById("cart_size").innerHTML = "" + empObj1.length;
}
function checkOut() {
    var empObj = JSON.parse(window.localStorage.getItem("empObj") || "[]");
    var tableContent = "";
    var sum = 0;
    var startTable = "<table border=1 align=center class=table table-striped ><tr><th>Item Name</th><th>Item Price</th></tr>";
    empObj.forEach(function (n) {
        tableContent += "<tr><td>" + n.name + "</td> <td>" + n.price + "</td></tr>";
        console.log("name is " + n.name);
        sum += eval(n.price);
    });
    var endTable = "</table >";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("ResultTable").innerHTML = tableContent;
    console.log("<h2>Total Budget is </h2>" + sum);
    var myPTag = document.createElement("p");
    var myPTagContent = document.createTextNode("Total Price:  $" + (sum).toFixed(2));
    myPTag.appendChild(myPTagContent);
    document.getElementById("FTbodySum").appendChild(myPTag);
}
