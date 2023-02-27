const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const studentArray = require('./InitialData');
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
//fetching all students deails
app.get("/api/student", async(req, res)=>{
    res.json(studentArray);
})

//fetching the data of the student id 

app.get("/api/student/id", async(req, res)=>{
    const index = studentArray.findIndex(e1 => e1.id == req.params.id)
    if(index >=0 && studentArray.length){
        res.json(studentArray[index]);
    }
    else{
        res.status(404).json("Page not found")
    }
})

// to add the new record to db 
app.post("/api/student", async(req, res)=>{
    const id = (studentArray.length)+1;
    req.body.id = id;
    console.log(req.body);
    studentArray.push(req.body);
    res.json(studentArray);
})

// to update a record

app.put("/api/student/id", async(req, res)=>{
    const index = studentArray.findIndex(e1 => e1.id == req.params.id)
    if(index >=0 && studentArray.length){
        studentArray[index] = req.body;
        res.json(studentArray[index]);
    }
    else{
        res.status(404).json("Page not found")
    } 
})

// to delete a record
app.delete("/api/student/id", async(req, res)=>{
    const index = studentArray.findIndex(e1 => e1.id == req.params.id)
    if(index >=0 && studentArray.length){
       studentArray.splice(index, 1);
       res.json(studentArray);
    }
    else{
        res.status(404).json("Page not found")
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   