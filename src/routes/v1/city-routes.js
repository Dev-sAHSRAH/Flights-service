const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");
// const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);
router.delete("/:id", CityController.destoryCity);
router.patch("/:id", CityController.updateCity);

module.exports = router;
