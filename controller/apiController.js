const { CvDataBase } = require("../models/CvDataBase");

const saveCurriculums = async (req, res) => {
  try {
    const curriculum = new CvDataBase(req.body);
    await curriculum.save();
    res.status(201).json(curriculum);
  } catch (error) {
    res.status(501).json(error);
  }
};


module.exports = { saveCurriculums }