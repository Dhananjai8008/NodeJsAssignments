const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", function(req, res){
    res.send("Hello World!");
});
function optimization(req, res){
    if(isNaN(req.body.num1)||isNaN(req.body.num2)){
        res.json({
            status: "error",
            message: "Invalid data types"
        });
       }
       else if((req.body.num1 < -1000000)||(req.body.num2 < -1000000)||(result < -1000000)){
        res.json({
            message: "Underflow"
        });
       }
       else if((req.body.num1 > 1000000)||(req.body.num2 > 1000000)||(result > 1000000)){
        res.json({
            message: "Overflow"
        });
       }
}
app.post("/add", function(req, res){
   let result =  req.body.num1 + req.body.num2;
optimization(req, res);
   if(result != ''){
    res.json({
        status:"Success",
        message: `The Sum of given two numbers`,
        sum: `${result}`

    });
   }
});
app.post("/sub", function(req, res){
    let result =  req.body.num1 - req.body.num2;
optimization(req, res);
    if(result != ''){
     res.json({
         status:"Success",
         message: "The Differnce of given two numbers",
         Difference: `${result}`
 
     });
    }
 });
 app.post("/multiply", function(req, res){
    let result =  req.body.num1 * req.body.num2;
optimization(req, res);
    if(result != ''){
     res.json({
         status:"Success",
         message: `The Product of given two numbers`,
         result: `${result}`
 
     });
    }
 });
 app.post("/divide", function(req, res){
    let result =  req.body.num1 / req.body.num2;
    if(req.body.num2 === 0){
        res.json({
            status: "error",
            message: "Cannot divide by zero"
        });
    }
optimization(req, res);
    if(result != ''){
     res.json({
         status:"Success",
         message: `The division of given two numbers`,
         result: `${result}`
 
     });
    }
 });
 
 
 


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;