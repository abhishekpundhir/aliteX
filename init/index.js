const mongoose = require("mongoose")
const initData = require("./data")
const Listing = require("../models/listing");

const mongoURL = "mongodb://127.0.0.1:27017/alitex";
main().then(()=>{
    console.log("Connected to DataBase");
}).catch((err)=>{
    console.log(err);

})
async function main(){
    await mongoose.connect(mongoURL)
}




const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data)
    console.log("Data Was Initialized")
}

initDB()