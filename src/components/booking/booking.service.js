const Database = require('../../service/database');
const NoticeDal = require('./booking.dal');

exports.create = async (data, gausalaId) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await NoticeDal.create(dbClient, gausalaId, data);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.findAll = async (gausalaId) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await NoticeDal.findAll(dbClient, gausalaId);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.update = async (gausalaId, id, data) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await NoticeDal.update(dbClient, gausalaId, id, data);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.delete = async (gausalaId, id) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await NoticeDal.delete(dbClient, gausalaId, id);
    return result;
  } finally {
    dbClient.release();
  }
};
