const express = require("express");
const router = express.Router();

//posts
//index
router.get("/", (req, res) => {
    res.send("GET for posts.");
});

//show
router.get("/:id", (req, res) => {
    res.send("GET for post id.");
});

//POST
router.post("/:id", (req, res) => {
    res.send("POST for post.");
});

//DELETE
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id.");
});

module.exports = router;