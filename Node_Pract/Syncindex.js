const fs=require('fs');
// fs.writeFileSync('readfile.txt','Hi! my name is Abdullah How are You..');
// fs.appendFileSync('readfile.txt','Im fine..!!');
const buffer= fs.readFileSync('readfile.txt','utf8');
console.log(buffer);
fs.renameSync('readfile.txt','writefile.txt');
fs.rmdirSync('index.js');


fs.mkdir('AynscIndex', (err)=>{
    console.log('The folder is created')
});