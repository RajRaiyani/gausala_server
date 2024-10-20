const express = require('express');
const NoticeController = require('./notice.controller');
const NoticeValidation = require('./notice.validation');
const isLoggedIn = require('../../middleware/isLoggedIn');

const { validate } = require('../../utility/validationHelper');

const router = express.Router();

router.route('/')
  .post(isLoggedIn, validate(NoticeValidation.create), NoticeController.create)
  .get(isLoggedIn, validate(NoticeValidation.list), NoticeController.read);

router.route('/:id')
  .put(isLoggedIn, validate(NoticeValidation.update), NoticeController.update)
  .delete(isLoggedIn, validate(NoticeValidation.delete), NoticeController.delete);

module.exports = router;
