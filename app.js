


if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
}

const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
/* const MONGO_URL = "mongodb://127.0.0.1:27017/handMade"; */
const MONGO_URL = process.env.MONGO_URI;

const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./models/review");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user")

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

main().then(() => {
    console.log("connected to MongoDB.");
    initDB();
}).catch((err) => {
    console.error("failed to connect to MongoDB.", err);
});


async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = require("./init/index");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static("public"));

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
};

app.get("/", (req, res) => {
    res.redirect("/listings");
});


app.get("/test", async (req, res) => {
    const data = await Listing.find({});
    res.send(data);
});


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

/* app.get("/demouser", async (req, res) => {
    let fakeUser = new User({
        email: "student@gmail.com",
        username: "delta-student"
    });

    let registeredUser = await User.register(fakeUser, "helloworld");
    res.send(registeredUser);
}); */

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

    app.use( (req, res, next) => {
        next(new ExpressError(404, "page not found."));
    });

    app.use((err, req, res, next) => {
        let {statusCode=500, message="Something went wrong"} = err;
        res.status(statusCode).render("error.ejs" ,{message});
        /* res.status(statusCode).send(message); */
    });

/* app.listen(8080, () => {
    console.log("server is listing on port 8080.");
}); */


app.listen(PORT, () => {
    console.log("server is running");
});

