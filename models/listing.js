const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: { type: String, default: "default-image" },
    url: { 
      type: String, 
      default: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
