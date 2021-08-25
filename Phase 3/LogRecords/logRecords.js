function logRecords(){
let readline = require("readline-sync");
let fs = require ("fs");
const path = './employees.json'
let employeesArray;

debugger;

try {
  if (fs.existsSync(path)) {
    employeesArray =JSON.parse(fs.readFileSync("employees.json").toString() || "[]");
  } else{ fs.writeFileSync("employees.json", "[]") }
} catch(err) {
  console.error(err)
}

debugger;

const date = require('date-and-time')
const now  =  new Date();
const value = date.format(now,'YYYY/MM/DD HH:mm:ss').toString();

debugger;


let firstName = readline.question("Enter the first name");
let lastName = readline.question("Enter the last name");
let gender = readline.question("Enter the gender")
let emailId = readline.questionEMail("Enter your email id")
console.log("Your id is "+ firstName);
console.log("Your name is "+ lastName);
console.log("Your salary is "+ gender);
console.log("Your email id is "+ emailId)
console.log("Date and time of storing: "+value)

debugger;

let emp = {FIRSTNAME: firstName, LASTNAME: lastName, GENGER: gender, EMAILID: emailId, DATE: value }
employeesArray.push(emp);
let employeeString = JSON.stringify(employeesArray);
fs.writeFileSync("employees.json", employeeString);
console.log("Data stored in file")

debugger;
}

logRecords()

        