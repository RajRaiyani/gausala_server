const Database = require('../../service/database');
const DonationDal = require('./donation.dal');

exports.create = async (gausalaId, data) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await DonationDal.create(dbClient, gausalaId, data);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.findAll = async (gausalaId) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await DonationDal.findAll(dbClient, gausalaId);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.update = async (gausalaId, id, data) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await DonationDal.update(dbClient, gausalaId, id, data);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.delete = async (gausalaId, id) => {
  const dbClient = await Database.pool.connect();
  try {
    await DonationDal.delete(dbClient, gausalaId, id);
  } finally {
    dbClient.release();
  }
};
