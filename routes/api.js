const { saveCurriculums } = require("../controller/apiController");

const express = require("express");
const router = express.Router();

router.post("/save", saveCurriculums);

module.exports = router;
