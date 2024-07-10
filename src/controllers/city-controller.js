const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 *
 * POST: /cities
 * req-body: {name: LONDON}
 */
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });

    SuccessResponse.data = city;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
/**
 *
 * DELETE: /cities/:id
 * req-body: {}
 */
async function destoryCity(req, res) {
  try {
    const response = await CityService.destoryCity(req.params.id);

    SuccessResponse.data = response;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
/**
 *
 * PATCH: /cities/:id
 * req-body: {}
 */
async function updateCity(req, res) {
  try {
    const response = await CityService.updateCity(req.params.id, req.body);

    SuccessResponse.data = response;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  destoryCity,
  updateCity,
};
