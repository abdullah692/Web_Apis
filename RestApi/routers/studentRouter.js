const express = require('express');
const router = new express.Router();
const Student=require('../models/students')

router.get("/", (req, res) => {
    res.send('Hello there...')
})

router.post("/students",async(req,res)=>{
    try {
        const newStudent=new Student(req.body);
        const user=await newStudent.save();
        res.status(201).send(user);

    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/getstudentsData",async(req,res)=>{
    try {
        const getStudent=await Student.find({});
        res.status(201).send(getStudent);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/student/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const getStdid=await Student.findById(id);
        console.log(getStdid);
        if(!getStdid)
        {
            return res.status(404).send();
        }
        else
        {
            res.status(201).send(getStdid);
        }

    } catch (error) {
        res.status(404).send(error);

    }
})

router.patch('/student/:id',async(req,res)=>{
    try {

        const id=req.params.id;
        console.log('id',id)
        const updateStudent =await Student.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log('Update Studnet',updateStudent);
        res.status(201).send(updateStudent);

    } catch (error) {
        res.status(404).send(error)
    }
})


router.delete('/student/:id',async(req,res)=>{
    try {
        const getStd=req.params.id;
        const deleteStd=await Student.findByIdAndDelete(getStd);
        if(!deleteStd)
        {
            res.status(404).send();
        }
        else
        {
            res.status(200).send(deleteStd)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

// router.get("/student/:name",async(req,res)=>{
//     try {
//           const getName= req.params.name
//     // console.log(req.params)
//     //     res.send(req.query)
//         const stdName=await find(getName);
//         console.log(stdName);
//         if(!stdName)
//         {
//             return res.status(404).send();
//         }
//         else
//         {
//             res.status(201).send(stdName)
//     }

//     } catch (error) {
//         res.status(404).send(error)
//         console.log('Error :',error)

//     }
// })

module.exports=router;
