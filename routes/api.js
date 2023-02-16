const { validId } = require("../middleware/validId");
const { check } = require("express-validator");

const express = require("express");
const Controller = require("../controller/Controller");
const router = express.Router();

router.post(
  "/save",
  [
    check("name")
      .not()
      .isEmpty()
      .withMessage("Requerido.")
      .isLength({ min: 3, max: 25 }),
    check("lastName")
      .not()
      .isEmpty()
      .withMessage("Requerido.")
      .isLength({ min: 3, max: 25 }),
    check("phoneNumber").not().isEmpty().withMessage("Requerido."),
    check("email").not().isEmpty().withMessage("Requerido.").isEmail(),
    check("vacant").not().isEmpty().withMessage("Requerido."),
    check("location").not().isEmpty().withMessage("Requerido."),
    check("province").not().isEmpty().withMessage("Requerido."),
    check("country").not().isEmpty().withMessage("Requerido."),
  ],
  Controller.saveCurriculums
);
router.get("/info", Controller.infoCurriculums);
router.get("/id/:id", validId, Controller.infoCurriculum);
router.put(
  "/edit/:id",
  validId,
  [
    check("name")
      .not()
      .isEmpty()
      .withMessage("Complete el campo que desea modificar.")
      .isLength({ min: 3, max: 25 }),
    check("lastName")
      .not()
      .isEmpty()
      .withMessage("Complete el campo que desea modificar.")
      .isLength({ min: 3, max: 25 }),
    check("phoneNumber")
      .not()
      .isEmpty()
      .withMessage("Complete el campo que desea modificar."),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Complete el campo que desea modificar.")
      .isEmail(),
    check("vacant")
      .not()
      .isEmpty()
      .withMessage("Complete el campo que desea modificar."),
    check("location")
      .not()
      .isEmpty()
      .withMessage("Complete el campo que desea modificar."),
    check("province")
      .not()
      .isEmpty()
      .withMessage("Complete el campo que desea modificar."),
    check("country")
      .not()
      .isEmpty()
      .withMessage("Complete el campo que desea modificar."),
  ],
  Controller.editCurriculum
);
router.delete("/delete/:id", Controller.deleteCurriculum);
router.get("/user", Controller.axiosQuery);

module.exports = router;
