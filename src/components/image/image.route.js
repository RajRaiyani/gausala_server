const express = require('express');
const ImageController = require('./image.controller');
const { validate } = require('../../utility/validationHelper');
const ImageValidation = require('./image.validation');

const router = express.Router();

router.route('/')
  .get(ImageController.findAll);

router.route('/:id')
  .delete(validate(ImageValidation.delete), ImageController.delete);

module.exports = router;
