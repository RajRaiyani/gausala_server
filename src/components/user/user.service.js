const UserDal = require('./user.dal');
const Database = require('../../service/database');
const ServerError = require('../../utility/serverError');

exports.login = async (phoneNumber, password) => {
  const dbClient = await Database.pool.connect();
  try {
    const user = await UserDal.findUserByPhoneNumber(dbClient, phoneNumber);

    if (!user) throw new ServerError('NOT_FOUND', 'user not exists.');

    if (user.password !== password) throw new ServerError('UNAUTHORIZED', 'password is incorrect.');

    return user;
  } finally {
    dbClient.release();
  }
};
