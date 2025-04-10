const express = require("express")
const mongoose = require("mongoose")
const app = express()

const mongoURL = "mongodb://127.0.0.1:27017/alitex";
main().then(()=>{
    console.log("Connected to DataBase");
}).catch((err)=>{
    console.log(err);

})
async function main(){
    await mongoose.connect(mongoURL)
}

app.get("/",(req,res)=>{
    res.send("Root is  Running")
})



app.listen(9090,()=>{
    console.log(`Server is Running on Port 9090.....`)
})