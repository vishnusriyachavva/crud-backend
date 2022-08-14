// const express = require("express")
// const mysql = require("mysql")
// const cors = require('cors')
// var bodyParser = require('body-parser')
// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"student"
// })
// db.connect((err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Success")
//     }
// })
// app=express()
// app.get("/",(req,res)=>{
//     console.log("server is started")
// })
// app.get("/Report",(req,res)=>{
//     console.log("reporting")
//     db.query("select * from student_tb",(err,result)=>{
//         if(err){
//             console.log("error")
//         }
//         else{
//             console.log("hurrah result")
//             res.send(result)
//         }
//     })
// })
// app.listen(3001,()=>{
//     console.log("server is listening")
// })