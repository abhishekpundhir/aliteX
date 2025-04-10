// Requiring Resoources 
const express = require("express")
const mongoose = require("mongoose")
const Listing = require("./models/listing")
const methodOverride = require("method-override")
const path = require("path")
const app = express()

// APP SET And USE Statements 
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"));

const mongoURL = "mongodb://127.0.0.1:27017/alitex"; // Mongoose URL 
// Main Function to Connect with DataBase
main().then(()=>{
    console.log("Connected to DataBase");
}).catch((err)=>{
    console.log(err);

})
// Init Main to Establish the Connection Between App and DataBase.
async function main(){
    await mongoose.connect(mongoURL)
}

// Root Rout
app.get("/",(req,res)=>{
    res.send("Root is  Running")
})

// Index Rout
app.get("/listings", async (req,res)=>{
   const allListings = await Listing.find({})
   res.render("listings/index.ejs",{allListings})
})

// New Rout
app.get("/listings/new", async (req,res)=>{
   res.render("listings/new.ejs")
})



// Show Rout
app.get("/listings/:id", async (req,res)=>{
    const {id } = req.params;
   const listing = await Listing.findById(id)
   res.render("listings/show.ejs",{listing})
})



// Create Rout
app.post("/listings", async (req,res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings")
})


// Edit Rout
app.get("/listings/:id/edit", async (req,res)=>{
    const {id } = req.params;
   const listing = await Listing.findById(id)
   res.render("listings/edit.ejs",{listing})
})


// Update Route
app.put("/listings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        // res.redirect(`/listings/${id}`);
        res.redirect(`/listings`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong");
    }
});


// Delete Route
app.delete("/listings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Listing.findByIdAndDelete(id, { ...req.body.listing });
        res.redirect(`/listings`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong");
    }
});

































































































app.listen(9090,()=>{
    console.log(`Server is Running on Port 9090.....`)
})