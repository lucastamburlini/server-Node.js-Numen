const { CvDataBase } = require("../models/CvDataBase");
const validId = async (req, res, next) => {
  try {
    const item = await CvDataBase.findById(req.params.id);
    if (item !== null) {
      next();
    } else {
      res.status(500).json({ msg: "el ID es inválido." });
    }
  } catch (error) {
    res
      .status(500)
      .json(
        { msg: "El ID ingresado no coincide con el formato de 24 caracteres." },
        error
      );
  }
};

module.exports = { validId };
