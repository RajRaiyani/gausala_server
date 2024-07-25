const express = require('express');
const UserController = require('./user.controller');
const UserValidation = require('./user.validation');
const { validate } = require('../../utility/validationHelper');

const router = express.Router();

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Users
 *     description: Login user
 *     produces:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/user.yaml#/login/request'
 *     responses:
 *       200:
 *         description: User logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/user.yaml#/login/response'
 */

router.route('/login')
  .post(validate(UserValidation.login), UserController.login);

module.exports = router;
