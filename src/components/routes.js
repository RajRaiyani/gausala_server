const express = require('express');
const UserRoute = require('./user/user.route');
const MemberRoute = require('./member/member.route');
const DonationRoute = require('./donation/donation.route');
const BookingRoute = require('./booking/booking.route');
const ImageRoute = require('./image/image.route');

const router = express.Router();

router.use('/users', UserRoute);
router.use('/members', MemberRoute);
router.use('/donations', DonationRoute);
router.use('/bookings', BookingRoute);
router.use('/images', ImageRoute);

module.exports = router;
