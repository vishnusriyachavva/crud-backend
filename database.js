// const express = require('express');
// const mysql = require('mysql');
// var bodyparser = require('body-parser');
// const multer = require('multer');
// const cors = require('cors');
// const { response } = require('express');
// const path = require('path');
// app = express();
// app.use(express.json());
// app.use(bodyparser.urlencoded({extended : true}));
// app.use(cors());
// const database = mysql.createPool({
//         connectionLimit :'10',
//         host : "localhost",
//         user : "root",
//         password : "",
//         database : "students"
//     })
//     database.getConnection((err)=>{
//         if(err){
//             console.log(err);
//         } 
//         else{
//             console.log("Server connection is successful");
//         }
//     })

// const storage = multer.diskStorage({
//     destination : (req, file, cb)=>{
//          cb(null, './images');
//     },
//     filename : (req, file, cb)=>{
//         cb(null, file.originalname)
//     }
// })

// let upload = multer({storage : storage});

// app.post("/fileupload",upload.single('avatar'), (req,res)=>{
    

//     if(!req.file){
//         console.log("NO file uploaded");
//     }
//     else{
//         console.log(req.file.filename)
//         var imgsrc = 'http://127.0.0.1.3000/image/' + req.file.filename;
//         var updateimg = `UPDATE student_detail set image= ? where stid ='1202'`;
//         database.query(updateimg, [imgsrc], (err, result)=>{
//             if(err) throw err
//             console.log("File uploaded")
//         })
//     }
// })
// app.listen(8080,()=>{
//     console.log("server is listening")
// })