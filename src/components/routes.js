const express = require('express');
const UserRoute = require('./user/user.route');
const MemberRoute = require('./member/member.route');
const DonationRoute = require('./donation/donation.route');
const BookingRoute = require('./booking/booking.route');
const ImageRoute = require('./image/image.route');
const isLoggedIn = require('../middleware/isLoggedIn');

const router = express.Router();

router.use('/users', UserRoute);
router.use('/members', isLoggedIn, MemberRoute);
router.use('/donations', isLoggedIn, DonationRoute);
router.use('/bookings', isLoggedIn, BookingRoute);
router.use('/images', isLoggedIn, ImageRoute);

module.exports = router;
