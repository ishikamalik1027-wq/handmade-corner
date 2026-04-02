const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    productName: String,
    description: String,
    price: Number,
    category: String,
    image:{
        /*  type: String,
        default:"https://images.search.yahoo.com/search/images?p=random+handmade+image&fr=mcafee&type=E210US714G0&imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2Ff3%2F50%2F48%2Ff35048e647adf2353ec881dac9cc526a.jpg#id=10&iurl=https%3A%2F%2Fi.pinimg.com%2F474x%2Ff3%2F50%2F48%2Ff35048e647adf2353ec881dac9cc526a.jpg&action=click",
        set: (v) =>
            v === "" ?  "https://images.search.yahoo.com/search/images?p=random+handmade+image&fr=mcafee&type=E210US714G0&imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2Ff3%2F50%2F48%2Ff35048e647adf2353ec881dac9cc526a.jpg#id=10&iurl=https%3A%2F%2Fi.pinimg.com%2F474x%2Ff3%2F50%2F48%2Ff35048e647adf2353ec881dac9cc526a.jpg&action=click"
        : v, */
        url: String,
        filename: String,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;