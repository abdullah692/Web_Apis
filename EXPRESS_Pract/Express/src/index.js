const path=require("path")

const express= require('express')
const app=express();
const port=3000;


//  console.log(path.join(__dirname , "../public"))
const staticPath =path.join(__dirname , "../public")

//builtin middleware
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send("Hello from Express first practice")
})
app.get("/about",(req,res)=>{
    res.send("Hello from Express in About Page")
})
// app.get("/contact",(req,res)=>{
//     res.send([{
//         id:1,
//         name:'Abdullah'
//     },
//     {
//         id:2,
//         name:'Waqas'
//     }
// ])
// })

app.listen(8000,()=>{
    console.log(`Port is successfully running at 8000`)
})