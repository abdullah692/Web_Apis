// const mongoose = require('mongoose')
// const DB=process.env.DATABASE;

// mongoose.connect(DB,{

// useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connection is successful')
// }).catch((e) => {
//     console.log('Connection is not successful',e);
// })

const mongoose=require('mongoose')

const DB=process.env.DATABASE;

mongoose.connect('mongodb+srv://abdullahsidd:romanreigns12345@cluster0.6xbb7.mongodb.net/student-api?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log(`Connection build successfully`)
}).catch((err)=>{
    console.log(err)
}); 
