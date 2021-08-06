//alert("Welcome to External JS")
function addData() {
    // alert("Event fired...")
    //This code create p tag 
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;

    //document.getElementById("title").innerHTML
    //document.getElementById("article").innerHTML

    var image = document.getElementById("image").value;
    var img = document.createElement("img");
    img.style.height = "200px";
    img.style.width = "350px";
    img.src = image;

    var imgElement = document.createElement('img3');
    var titleElement = document.createElement('img1');
    var articleElement = document.createElement('img2');
    

    var myPTagContent = document.createTextNode("Blog Title is "+title)
    var myPTagContent2 = document.createTextNode("Description is "+article)
    
    
    //This code add text node to p tag 
    titleElement.appendChild(myPTagContent);
    articleElement.appendChild(myPTagContent2);
 
    // refer the tag using id selector and append the p tag to div tag
    //document.getElementById("FirstBlog1").appendChild(titleElement);
    //document.getElementById("FirstBlog2").appendChild(articleElement);
    document.getElementById("FirstBlog1").innerHTML = "<br/> Blog Title is: "+ title +"<br/> Description of Article: "+article
    //document.getElementById("FirstBlog2").innerHTML ="<br/> Description of Article: "+article
    document.getElementById("FirstBlog2").appendChild(img);

   // document.getElementById("obj1").innerHTML="<br> 2nd Statement";
}

