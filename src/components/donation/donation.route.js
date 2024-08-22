const express = require('express');
const { validate } = require('../../utility/validationHelper');
const DonationController = require('./donation.controller');
const DonationValidation = require('./donation.validation');
const isLoggedIn = require('../../middleware/isLoggedIn');
const isValidApp = require('../../middleware/isValidApp');

const router = express.Router();

/**
 * @swagger
 * /donations:
 *   get:
 *     tags:
 *       - Donations
 *     description: Returns all Donations
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Donations
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/donation.yaml#/findAll/response'
 *   post:
 *     tags:
 *       - Donations
 *     description: Create a new Donation
 *     produces:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/donation.yaml#/create/request'
 *     responses:
 *       200:
 *         description: New Donation created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/donation.yaml#/create/response'
 */

router.route('/')
  .get(isValidApp, DonationController.findAll)
  .post(isLoggedIn, validate(DonationValidation.create), DonationController.create);

/**
 * @swagger
 * /donations/{id}:
 *   put:
 *     tags:
 *       - Donations
 *     description: Update a donation
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the donation to update
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
 *       - Donations
 *     description: Delete a donation
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the donation to delete
 *         required: true
 *     responses:
 *       204:
 *         description: OK - request succeeded but doesn't return anything
 */
router.route('/:id')
  .put(isLoggedIn, validate(DonationValidation.update), DonationController.update)
  .delete(isLoggedIn, validate(DonationValidation.delete), DonationController.delete);

module.exports = router;
