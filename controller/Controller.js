const axios = require("axios");
const { validationResult } = require("express-validator");
const { CvDataBase } = require("../models/CvDataBase");

module.exports = {
  async saveCurriculums(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        const curriculum = new CvDataBase(req.body);
        await curriculum.save();
        res.status(201).json(curriculum);
      } else {
        res.status(501).json(err);
      }
    } catch (error) {
      res.status(501).json(error);
    }
  },

  async editCurriculum(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        await CvDataBase.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({ msg: "Los datos fueron actualizados." });
      } else {
        res.status(501).json(err);
      }
    } catch (error) {
      res.status(501).json(error);
    }
  },

  async infoCurriculums(req, res) {
    const curriculums = await CvDataBase.find();
    res.status(200).json({ curriculums });
  },

  async infoCurriculum(req, res) {
    const curriculum = await CvDataBase.findById(req.params.id);
    res.status(200).json({ curriculum });
  },

  async deleteCurriculum(req, res) {
    await CvDataBase.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Los datos fueron eliminados." });
  },

  async axiosQuery(req, res) {
    try {
      const answer = await axios.get("https://randomuser.me/api/");
      res.json({ response: answer.data, status: answer.status });
    } catch (error) {
      res.json({
        response: error.response.data,
        status: error.response.status,
      });
    }
  },
};
