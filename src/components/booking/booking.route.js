const express = require('express');
const { validate } = require('../../utility/validationHelper');
const BookingController = require('./booking.controller');
const BookingValidation = require('./booking.validation');

const router = express.Router();

/**
 * @swagger
 * /bookings:
 *   get:
 *     tags:
 *       - Bookings
 *     description: Returns all bookings
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of bookings
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/booking.yaml#/findAll/response'
 *   post:
 *     tags:
 *       - Bookings
 *     description: Create a new booking
 *     produces:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/booking.yaml#/create/request'
 *     responses:
 *       200:
 *         description: New Booking created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'components/booking.yaml#/create/response'
 */
router.route('/')
  .get(BookingController.findAll)
  .post(validate(BookingValidation.create), BookingController.create);

/**
 * @swagger
 * /bookings/{id}:
 *   put:
 *     tags:
 *       - Bookings
 *     description: Update a booking
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the booking to update
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'components/booking.yaml#/update/request'
 *     responses:
 *       204:
 *         description: OK - request succeeded but doesn't return anything
 *   delete:
 *     tags:
 *       - Bookings
 *     description: Delete a booking
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the booking to delete
 *         required: true
 *     responses:
 *       204:
 *         description: OK - request succeeded but doesn't return anything
 */
router.route('/:id')
  .put(validate(BookingValidation.update), BookingController.update)
  .delete(validate(BookingValidation.delete), BookingController.delete);

module.exports = router;
