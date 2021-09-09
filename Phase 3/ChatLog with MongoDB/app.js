//load the express module
let express = require ("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
//create the reference of express module
let app = express()

//load the http module and conmnect to express module
let http = require("http").Server(app)

const users = [];
const connections = [];

//url
let url = "mongodb://localhost:27017/connectweb";
mongoose.pluralize(null);


//load the socket.io module and connect http module
// with IIFE features
let io = require('socket.io')(http)


app.use(express.static('public'));



app.get("/", (req, res)=>{
    res.sendFile(__dirname + "\\index.html")
   

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
        CLIENT_NAME: String,
        MESSAGE: String

    })


io.on("connection", (socket)=>{
    console.log("Client connected")
    socket.emit("servermessage", "Hello Client, how can I help you today?")
    
    //receive the message from client application 

    socket.on("send-chat-message", data=>{
       // console.log(message)
        
        let productModel = mongoose.model("chatlogcollection", productSchema)
        //using model we have to create the reference
        let p = new productModel({CLIENT_NAME: data.CLIENTNAME, MESSAGE: data.CLIENTMSG} )
        productModel.insertMany(p, (err, result)=>{
        if(!err){
            console.log(result)
        } else{
            console.log(err)
        }
        //mongoose.disconnect();
    })

        var wordList = ["Okay, I would be glad to assist you ", "Can you provide your email address",
        "I will now transfer you to a customer representative", "Have a good one", "Can I have you first and last name", "Can I have your phone number", "Have you been vaccinated yet?",
        "Please wait, can you clarity what you want?"];
        var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
         
        socket.emit('chat-message', selectedWord)
    })
}) 
    
})
//please run the server using http module not express module
http.listen(9090, ()=> console.log("Server running on port no 9090"))

