const express = require('express');
const ImageController = require('./image.controller');
const { validate } = require('../../utility/validationHelper');
const ImageValidation = require('./image.validation');
const isLoggedIn = require('../../middleware/isLoggedIn');
const fileUpload = require('../../middleware/fileUpload');
const isValidApp = require('../../middleware/isValidApp');

const router = express.Router();

router.route('/')
  .get(isValidApp, ImageController.findAll)
  .post(isLoggedIn, fileUpload.single('file'), ImageController.create);

router.route('/:id')
  .put(isLoggedIn, fileUpload.single('file'), ImageController.update)
  .delete(isLoggedIn, validate(ImageValidation.delete), ImageController.delete);

module.exports = router;
