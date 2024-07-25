const express = require('express');
const { validate } = require('../../utility/validationHelper');
const MemberController = require('./member.controller');
const MemberValidation = require('./member.validation');

const router = express.Router();

/**
 * @swagger
 * /members:
 *   get:
 *     tags:
 *       - Members
 *     description: Returns all members
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of members
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/member.yaml#/findAll/response'
 *   post:
 *     tags:
 *       - Members
 *     description: Create a new member
 *     produces:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/member.yaml#/create/request'
 *     responses:
 *       200:
 *         description: New member created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/member.yaml#/create/response'
 */
router.route('/')
  .get(MemberController.findAll)
  .post(validate(MemberValidation.create), MemberController.create);

/**
 * @swagger
 * /members/{id}:
 *   put:
 *     tags:
 *       - Members
 *     description: Update a member
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the member to update
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/donation.yaml#/update/request'
 *     responses:
 *       204:
 *         description: OK - request succeeded but doesn't return anything
 *   delete:
 *     tags:
 *       - Members
 *     description: Delete a member
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the member to delete
 *         required: true
 *     responses:
 *       204:
 *         description: OK - request succeeded but doesn't return anything
 */
router.route('/:id')
  .put(validate(MemberValidation.update), MemberController.update)
  .delete(validate(MemberValidation.delete), MemberController.delete);

module.exports = router;
