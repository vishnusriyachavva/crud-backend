// const express = require('express');
// const mysql = require('mysql');
// const multer = require('multer');
// const path = require('path');
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images');
//     },
//     filename:(req,file,cb)=>{
//         console.log(file);
//         console.log("images/"+file.originalname);
//         cb(null,Date.now +path.extname(file.originalname))
//     }
    

// })
// app = express()
// const upload = multer({ storage: storage ,
// limits :{fileSize : 10000000},
// fileFilter : function(req, file, cb){
//     var ext = path.extname(file.originalname);
//     if(ext!= '.png' && ext!= '.jpg' && ext!= '.jpeg' && ext!= '.gif'){
//         return cb("Error!!!")
//     }
//     cb(null, true)
// }
// });
// app.get("/upload",(req,res)=>{
//     res.render("upload");
// })
// app.post("/upload",upload.single("image"),(req,res)=>{
//     if(!req.file){
//         console.log("file not uploaded")
//     }
//     else{
//         res.send("image uploaded");
//         console.log(req.file.filename);
//         var url = "http://127.0.0.1:3001/images/"+req.file.filename;
//         var db = "update student_details set image=(?) where stid = '1201'";
//         db.query(db,[url],(err,result)=>{
//             console.log("File uploaded to database")
//         })

//     }
    
// })
// app.listen(3001,()=>{
//     console.log("server is listening")
// })