const express=require('express')

const app=express()

const sendEmail=require("./controllers/sendingMail")
app.use(express.json())
app.use("/sendMail",sendEmail)
app.get("/",(req,res)=>{
    res.send({message:"Hello Node Js"})
})

app.listen(4000,()=>{
    console.log("Server Is Running............")

})