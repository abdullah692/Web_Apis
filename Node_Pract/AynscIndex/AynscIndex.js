const fs=require('fs');
// fs.mkdir('AynscIndex', (err)=>{
//     console.log('The folder is created')
// });

// fs.writeFile('./AynscIndex/Write.txt','Hi ! You are working on Aynsc Modules',(err)=>{
//     console.log("Text file is created");
// })

// fs.appendFile('./AynscIndex/Write.txt',' Yes U append it',(err)=>{
//     console.log('File is Appended');
// })

// fs.readFile('Write.txt','utf8',(err,data)=>{
//     console.log(data,err);
// });

// fs.rename('Write.txt','Read-Write.txt',(err)=>{
//     console.log(err)
// })

fs.unlink('AynscIndex.js',(err)=>{
    console.log('File is deleted')
})

fs.rmdir('AynscIndex',(err)=>{
    console.log(err)
})