//load the module
let express = require("express")
//let ejs = require('ejs');
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
let app=express();
//let ejs = require('ejs');

app.set('view engine', 'ejs');

//url
let url = "mongodb://localhost:27017/connectweb";
mongoose.pluralize(null);



//use to enable post data receiving from normal html form
app.use(bodyParser.urlencoded({extended: true}))


app.get("/index", (request, response)=>{
    response.sendFile(__dirname + "\\index.html");
})

app.get("/addcourse", (request, response)=>{
    response.sendFile(__dirname + "\\addcourse.html")
})

app.get("/deletecourse", (request, response)=>{
    response.sendFile(__dirname + "\\deletecourse.html")
})


app.get("/updatecourse", (request, response)=>{
    response.sendFile(__dirname + "\\updatecourse.html")
})

app.get("/fetchcourse", (request, response)=>{
    response.sendFile(__dirname + "\\fetchcourse.html")
})


app.get("/index", (request, response)=>{
    response.sendFile(__dirname + "\\index.ejs")
})



//connect the database it returns promise object
mongoose.connect(url).then(res=> console.log("connected")).catch(
    err=>console.log(err)
)

//to use this db connection we have to call function
let db = mongoose.connection;
db.once("open", ()=>{
    //we have to define schema
    let productSchema = mongoose.Schema({
        _id: Number,
        coursename: String,
        description: String,
        amount : Number
    })

    app.post("/AddCourse", (request, response)=>{
        let data = request.body
        let productModel = mongoose.model("connectwebcollection", productSchema)

    //using model we have to create the reference
    let p = new productModel({_id: data.courseid, coursename:data.coursename, description: data.description, amount: data.amount} )
    productModel.insertMany(p, (err, result)=>{
        if(!err){
            console.log(result)
        } else{
            console.log(err)
        }
        //mongoose.disconnect();
    })

    response.sendFile(__dirname+"\\addcourse.html");
    //response.write("<h3 style=color:green;>Task Added successfully</h3>")
})

app.post("/UpdateCourse", (request, response)=>{
    let UpdateID = request.body.updateid;
    let UpdateAmount = request.body.updateamount

    let productModel = mongoose.model("connectwebcollection", productSchema)
   
    productModel.updateOne({_id:UpdateID}, {$set:{amount: UpdateAmount}},(err, result)=>{
        if(!err){
            if(result.modifiedCount>0  || result.matchedCount>0){
                console.log("Product updated successfully")
            }else{
            console.log("Product didn't update")
        }
    }else{
        console.log(err)
    }
    //mongoose.disconnect();
})

response.sendFile(__dirname+"\\updatecourse.html");  
   
})


app.post("/DeleteCourse", (request, response)=>{
    let DeleteID = request.body.deleteid;
    let productModel = mongoose.model("connectwebcollection", productSchema)

    productModel.deleteOne({_id : DeleteID}, (err, result)=>{
        if(!err){
            if(result.deleteCount>0){
                console.log("Record deleted successfully")
            }else{
                console.log("Record not present")
            }
        }else{
            console.log(err)
        }
      //  mongoose.disconnect()
    })
    
    response.sendFile(__dirname+"\\deletecourse.html");
})

app.get("/FetchCourseData", (request, response)=>{

    let productModel = mongoose.model("connectwebcollection", productSchema)
    productModel.find({},(err, doc)=>{
        if(!err){
            response.render("fetchcourse",{
               courseList: doc
            })
          
        }else{
            console.log(err)
        }
    })
 
})


})

app.listen(9090, ()=>console.log("Server running on port number 9090"))



