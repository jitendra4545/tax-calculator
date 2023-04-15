const express=require('express')
const { connection } = require('./config/db')
const { UserModel } = require('./model/UserData')
const cors=require('cors')
const app=express()

require('dotenv').config()
app.use(express.json())
app.use(cors())
app.get("/",async(req,res)=>{
  try{
      let allData=await UserModel.find()
      res.send(allData)
  }catch(err){
    console.log(err)
  }
})




app.post(`/add`,async(req,res)=>{
console.log(req.body)
let data=req.body
    try{
       let newData=new UserModel(data)
     let x=  await newData.save()
     res.send(x)        
            }catch(err){
                console.log(err)
            }
})



app.listen(process.env.port,async()=>{
    try{
   await connection
   console.log('connected with db')
    }catch(err){
        console.log(err)
    }
    console.log(`server running on port ${process.env.port}`)
})

