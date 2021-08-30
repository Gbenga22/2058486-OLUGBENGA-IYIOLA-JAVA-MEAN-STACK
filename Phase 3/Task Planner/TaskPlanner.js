let http = require("http");
let url = require("url")
let readline = require("readline-sync");
let fs = require ("fs");
const date = require('date-and-time')
const path = './taskRecords.json'
let taskArray;

let mainPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Document</title>
</head>
<body  style=padding-left: 20px>
    <h2 style="text-align:center">Task Planner</h2><hr>
    <h2>Add Task</h2>
    <form action="addTaskPage">
        <label for="">Emp Id: </label>
        <input type="number" name="empId"/><br/>
        <label for=""> Task Id: </label>
        <input type="number" name="taskId"/><br/>
        <label for=""> Task: </label>
        <input type="text" name="task"/><br/>
        <label for=""> Deadline: </label>
        <input type="date" name="deadline"/><br/>
        <input type="submit" value="Add Task"/>
    </form>
    
    <br>
    <hr>

    <h2>Delete Task</h2>
    <form action="deleteTaskPage">
        <label for=""> Task Id: </label>
        <input type="number" name="taskId"/><br/>
        <input type="submit" value="Delete Task"/>
    </form>

    <br>
    <hr>

    <h2>List Task</h2>
    <form action="listTaskPage">
        <input type="submit" value="List Task"/>
    </form>
    


</body>
</html>

`

let listTaskPage = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <h2 style="text-align:center">List Task page</h2><hr>
    
</body>
</html>
`

    let server = http.createServer((request, response)=>{
        let urlInfo = url.parse(request.url, true)
        if (urlInfo.path !="/favicon.ico"){
           if (urlInfo.path =="/mainPage"){
                response.write(mainPage)
           }else if (urlInfo.pathname =="/addTaskPage"){
                    let login =urlInfo.query;
                    let empID = login.empId
                    let taskID = login.taskId
                    let task = login.task
                    let deadline = login.deadline

                    try {
                        if (fs.existsSync(path)) {
                          taskArray =JSON.parse(fs.readFileSync("taskRecords.json").toString() || "[]");
                        } else{ fs.writeFileSync("taskRecords.json", "[]") }
                      } catch(err) {
                        console.error(err)
                      }
                    
                    let emp = {EMPID: empID, TASKID: taskID, TASK: task, DEADLINE: deadline }
                    let result = taskArray.find(l => l.TASKID == taskID)
                    console.log(result)
                    response.writeHead(200, {"content-type": "text/html"});
                    if( result == undefined){
                        taskArray.push(emp);
                        let taskString = JSON.stringify(taskArray);
                        fs.writeFileSync("taskRecords.json", taskString);
                        console.log("Task Added Successfully")
                        response.write("<h3 style=color:green;>Task Added successfully</h3>")
                        response.write(mainPage)

                 }else{
                   response.write("<h3 style=color:red;>Task ID must be unique</h3>")
                   response.write(mainPage);
                   console.log(result)
              }
              }else if (urlInfo.pathname == "/deleteTaskPage"){
                let login =urlInfo.query;
                let taskID = login.taskId
                taskArray= JSON.parse(fs.readFileSync("taskRecords.json").toString());
                let deleteIndex = taskArray.findIndex(n => n.TASKID===taskID);
                response.writeHead(200, {"content-type": "text/html"});
                console.log(deleteIndex)
                taskArray.splice(deleteIndex, 1)
            if(deleteIndex != -1){
                let taskString = JSON.stringify(taskArray);
                fs.writeFileSync("taskRecords.json", taskString);
                response.write("<h3 style=color:green;>Task Deleted successfully</h3>")
                console.log("Task Deleted Successfully")
                response.write(mainPage)
            }else{response.write("<h3 style=color:red;>Task ID does not exist</h3>")
                response.write(mainPage)     }

              } else if(urlInfo.pathname =="/listTaskPage"){
                taskArray= JSON.parse(fs.readFileSync("taskRecords.json").toString());
               var tableContent=""
               var startTable ="<table border=1 align=center  class= table table-striped><tr class= bg-info style=color:white;><th>Emp ID</th><th>Task ID</th><th>Task</th><th>Deadline</th></tr>"
                taskArray.forEach(n => {
                tableContent += "<tr ><td>"+ n.EMPID + "</td> <td>" + n.TASKID + "</td> <td>"+ n.TASK+"</td><td>"+ n.DEADLINE+"</td> </tr>";
             });
        
                 var endTable="</table >"
                 response.write( listTaskPage+ startTable+tableContent+endTable)
                

            }else{
            response.write(mainPage)
           }
          
       }
       response.end("")
    })
    
    server.listen(9090, () => console.log("server running on port number 9090"))
            