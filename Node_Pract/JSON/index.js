const fs= require('fs');


const objdata={
    name:'Abdullah Siddiqui',
    grade:'Stuudent',
    RollNo:'CT-18047',
    Uni:'NED University'
}

const JSONdata=JSON.stringify(objdata);
// const obj=JSON.parse(JSONdata);
// console.log(obj)
fs.writeFile("JSON.json" , JSONdata,(err)=>{
console.log('JSON File is created')
})
 
fs.readFile('JSON.json' ,'utf-8',(err,data)=>{
console.log(data);
const objFile =JSON.parse(JSONdata);
console.log(objFile);
})