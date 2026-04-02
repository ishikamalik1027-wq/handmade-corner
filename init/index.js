const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/handMade";

main().then(() => {
    console.log("connected to MongoDB.");
}).catch((err) => {
    console.error("failed to connect to MongoDB.", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "69a5a1028c19fe3167e3cddd"}));
    await Listing.insertMany(initData.data);
    console.log("database initialized.");
};
initDB();