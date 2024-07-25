const jwt = require('jsonwebtoken');
const UserServices = require('./user.service');

exports.login = async (req, res, next) => {
  const { phoneNumber, password } = req.body;
  try {
    const user = await UserServices.login(phoneNumber, password);

    const token = jwt.sign({ id: user.id, gausalaId: user.gausalaId }, process.env.JWT_SECRET, { expiresIn: '10h' });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
