const express = require('express')
const BLL= require("../BLL/studentsBLL")

router = express.Router()

router.get('/',async (req,res)=>{
    try{
      const student = await BLL.gerData()
    res.status(200).json(student)  
    }
    catch(e){
        res.status(500).json(e)  
    }
})

router.post('/' ,async (req ,res)=>{
  try{
    const student = req.body;
    const status = await BLL.addStudent(student)
    res.status(200).json(status)
    
  }catch(e){
    res.status(500).json(e)  
  }
})

router.put('/:id' ,async (req ,res)=>{
  try{
    const {id} = req.params
    const student = req.body;
    const status = await BLL.updateStudent(id,student)
    res.status(200).json(status)
  }catch(e){
    res.status(500).json(e)  
  }
})

router.delete('/:id' ,async (req ,res)=>{
  try{
    const {id} = req.params
    const status = await BLL.deleteStudent(id)
    res.status(200).json(status)
  }catch(e){
    res.status(500).json(e)  
  }
})

module.exports= router