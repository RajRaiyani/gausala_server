const GalleryDal = require('./image.dal');
const Database = require('../../service/database');

exports.create = async (gausalaId, data) => {
  const dbClient = await Database.pool.connect();
  try {
    return await GalleryDal.create(dbClient, gausalaId, data);
  } finally {
    dbClient.release();
  }
};

exports.findAll = async (gausalaId) => {
  const dbClient = await Database.pool.connect();
  try {
    return await GalleryDal.findAll(dbClient, gausalaId);
  } finally {
    dbClient.release();
  }
};

exports.update = async (gausalaId, id, data) => {
  const dbClient = await Database.pool.connect();
  const timeStamp = new Date().toISOString();
  try {
    return await GalleryDal.update(dbClient, gausalaId, id, timeStamp, data);
  } finally {
    dbClient.release();
  }
};

exports.delete = async (gausalaId, id) => {
  const dbClient = await Database.pool.connect();
  try {
    return await GalleryDal.delete(dbClient, gausalaId, id);
  } finally {
    dbClient.release();
  }
};
