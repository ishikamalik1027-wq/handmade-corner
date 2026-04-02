const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
    };

module.exports.renderNewForm = (req, res) => {
res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res) => {
let  { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate:{
            path: "author"
        }
    })
    .populate("owner");
    if(!listing) {
        req.flash("error", "product you requested for does not exist!.");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async(req, res) => {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;

    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    await newListing.save();

    req.flash("success", "Successfully made a new product listing!");
    res.redirect("/listings");
};


/* module.exports.createListing = async(req, res, next) => {
                console.log("BODY:", req.body);
    console.log("FILE:", req.file);
            if (req.file) {
                newListing.image = {
                url: req.file.path,
                filename: req.file.filename
                };
            }

            let filename = req.file.filename;
            const newListing = new Listing(req.body.listing);
            newListing.owner = req.user._id;
            newListing.image = {url, filename};

            await newListing.save();

            req.flash("success", "Successfully made a new product listings!");
            res.redirect("/listings")
        };
 */
module.exports.renderEditForm = async(req,res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "product you requested for does not exist!.");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
            
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing}, { new: true });
    if(req.file){
        listing.image = { url: req.file.path, filename: req.file.filename };
        await listing.save();
    }
    req.flash("success", "product listing update.");

    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    /* let deletedListing = */ await Listing.findByIdAndDelete(id);
    req.flash("success", "Products deleted.");
    res.redirect("/listings");
};