// const http = require('http');

// const server=http.createServer((req,res)=>{
//     if(req.url == "/" )
//     {
//         res.end('You are at Home Page')
//     }
//     else if (req.url == '/about')
//     {
//         res.end('You are at about page');
//     }
//     else if(req.url == '/contact')
//     {
//         res.end('You are at contact page');
//     }
//     else
//     {   res.writeHead(404,{"Content-type" : "text/html"});
//         res.end('<h1>404 page doesnot exists</h1>');
//     }
    
// })
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("port 3000 is running" ) 
// })


const http=require('http');
const port=5000;
const fs=require("fs");

const server=http.createServer((req,res)=>{
    fs.readFile(`${__dirname}/Api/userApi.json`,'utf-8',(err,data)=>{
        const objData=JSON.parse(data);
    
    if(req.url == '/')
    {
        res.end('This is your homepage')
    }
    else if(req.url == '/about')
    {
        res.end('This is your AboutPage')
    }
    else if(req.url == '/contact')
    {
        res.end('This is your Contact Page')
    }
    else if(req.url == '/userapi')
    {
        res.writeHead(200,{'content-type' : 'application/json'})
       res.end(objData[1].name);    
    }
    else 
    {
        res.writeHead(404 , {"Content-type" : "text/html"})
        res.end('<h1>Page 404 not Found</h1>')
    }
})
})

server.listen(port,'127.0.0.1',()=>{
    
    {
        console.log('The port is Successfully running');
    }
    
})