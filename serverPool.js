const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require('path')
const multer = require('multer')
require("dotenv").config();
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'Images')
//     },
//     filename:(req,file,cb)=>{
//         console.log(file)
//        cb(null, Date.now()+ path.extname(file.originalname))
//     }
// })
// const upload = ({storage:storage})

const db = mysql.createPool({
    connectionLimit:12,
    host:"localhost",
    user:"root",
    password:"",
    database:"students"
})
db.getConnection((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})

app=express()
// app.get("/",(req,res)=>{
//     console.log("server is started")
// })
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/images',express.static('images'))
// app.get("/report",(req,res)=>{
//     console.log("reporting")
//     db.query("select * from student_details",(err,result)=>{
//         if(err){
//             console.log("error")
//         }
//         else{
//             console.log("hurrah result")
//             res.send(result)
//         }
//     })
// })
// app.get("/upload",(req,res)=>{
//     res.render("upload");
   
// })
// app.post("/upload",upload.single("image"),(req,res)=>{
//     res.send("img uploaded");
    
// })

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
//     // try{
//     //     upload(req, res, function(err){
//     //         if(!req.file){
//     //             return res.send('Please select an image to upload')
//     //         }
//     //         else if(err instanceof multer.MulterError){
//     //             return res.send(err);
//     //         }
//     //         else if(err){
//     //             return res.send(err)
//     //         }
//     //         const classifiedsadd ={
//     //             imagelink : req.file.filename
//     //         }
//     //         // const updateimg = `update studentinformation set imagelink = ? where sid = 20B01A1219`;
//     //         // database.query(updateimg, classifiedsadd, (err, results)=>{
//     //         //     if(err) throw err;
//     //         //     res.json({success : 1})
//     //         // })
//     //     })
//     // }catch(err){console.log(err)}

//     if(!req.file){
//         console.log("NO file uploaded");
//     }
//     else{
//         console.log(req.file.filename)
//         var imgsrc = 'http://127.0.0.1.3000/images/' + req.file.filename;
//         var updateimg = `UPDATE student_detail set image = ? where stid = '1201'`;
//         database.query(updateimg, [imgsrc], (err, result)=>{
//             if(err) throw err
//             console.log("File uploaded")
//         })
//     }
// })

const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
         cb(null, './images');
    },
    filename : (req, file, cb)=>{
        cb(null, file.originalname)
    }
})

let upload = multer({storage : storage});

app.post("/fileupload",upload.single('avatar'), (req,res)=>{
    

    if(!req.file){
        console.log("NO file uploaded");
    }
    else{
        console.log(req.file.filename)
        var imgsrc = 'http://127.0.0.1:8080/images/' + req.file.filename;
        var updateimg = `UPDATE student_detail set image= ? where stid ='1201'`;
        db.query(updateimg, [imgsrc], (err, result)=>{
            if(err) throw err
            console.log("File uploaded")
        })
    }
})

app.get("/Report",(req,res)=>{
    
    const sql = "select * from student_detail"
    db.query(sql,(err,result)=>{
       
        res.send(result)
        
    })
})

app.get("/display",(req,res)=>{
    
    const sql = "select stid,stname from student_detail"
    db.query(sql,(err,result)=>{
       console.log(result)
        res.send(result)
        
    })
})
app.post("/edit",(req,res)=>{
    
    const{stid,stname}=req.body
    
    const update="update student_detail set stname = ? where stid = ?";
    db.query(update,[stname,stid],(err,data)=>{
        console.log(err);
    })
})
app.post("/insert",(req,res)=>{
    const stid = req.body.stid
    const stname = req.body.stname
    
    const sql = "insert into student_detail(stid,stname) values(?,?)"
    db.query(sql,[stid,stname],(err,result)=>{
        if (err) throw err
        else{
           console.log("inserted");
            res.end()
        }
    })
})
app.post("/del",(req,res)=>{
    const stid=req.body.stid;
    
    const sql = "delete from student_detail where student_detail.stid=?"
    db.query(sql,[stid],(err,result)=>{
        if (err) throw err
        else{
            res.end()
          
        }
    })
})
app.post("/delete/:stid",(req,res)=>{
    const stid=req.params.stid;
    
    const sql = "delete from student_detail where student_detail.stid=?"
    db.query(sql,[stid],(err,result)=>{
        if (err) throw err
        else{
            res.end()
            
        }
    })
})
app.post("/update",(req,res)=>{
    const stid=req.body.stid;
    const stname = req.body.stname;
    const sql = "update  student_detail set student_detail.stname=? where student_detail.stid=?"
    db.query(sql,[stname,stid],(err,result)=>{
        if (err) throw err
        else{
            
            res.end()
        }
    })
})

app.listen(process.env.PORT || 8080,()=>{
    console.log("server is listening")
})