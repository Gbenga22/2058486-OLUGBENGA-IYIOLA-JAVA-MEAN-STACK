//load the express module
let express = require ("express")

//create the reference of express module
let app = express()

//load the http module and conmnect to express module
let http = require("http").Server(app)

const users = [];
const connections = [];

//load the socket.io module and connect http module
// with IIFE features
let io = require('socket.io')(http)

//app.use(express.static(__dirname + '/public'));

app.use(express.static('public'));



app.get("/", (req, res)=>{
    res.sendFile(__dirname + "\\index.html")
   

})


io.on("connection", (socket)=>{
    console.log("Client connected")
    socket.emit("servermessage", "Hello Client, how can I help you today?")
    
    //receive the message from client application 

    socket.on("send-chat-message", message=>{
        console.log(message)

        var wordList = ["Okay, I would be glad to assist you ", "Can you provide your email address",
        "I will now transfer you to a customer representative", "Have a good one", "Can I have you first and last name", "Can I have your phone number", "Have you been vaccinated yet?",
        "Please wait, can you clarity what you want?"];
        var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
         socket.emit('chat-message', selectedWord)
    })
    
    
})
//please run the server using http module not express module
http.listen(9090, ()=> console.log("Server running on port no 9090"))

