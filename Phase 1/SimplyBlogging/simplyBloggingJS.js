
function addData() {

    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var image = document.getElementById("image").value;
    var imgArray = new Array();
    var emp = {Title:title, Article:article, Image:image};
    imgArray.push(emp);
   
   
   var TextImg = '';

$.each(imgArray, function(key, val) { 
          TextImg = '<div class="txt_img"><img src="' + val.Image + '" class="img-thumbnail thumb m-r" width="300" height="300"/><span>' +"<br/>Title:  " +val.Title + '</span><span>' +"<br/>Description:  " +val.Article+ '</span></div>';

          $('#imageContainer').append(TextImg);
});
   
   
   
   
   
   
   
   
}