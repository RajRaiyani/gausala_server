const fs = require('fs');
const GalleryDal = require('./image.dal');
const Database = require('../../service/database');
const { s3 } = require('../../service/aws');

exports.create = async (gausalaId, file) => {
  const dbClient = await Database.pool.connect();

  const fileContent = fs.readFileSync(file.path);

  const params = {
    Bucket: 'gausala',
    Key: file.filename,
    Body: fileContent,
  };

  const data = await s3.upload(params).promise();

  try {
    return await GalleryDal.create(dbClient, gausalaId, data.Location);
  } finally {
    dbClient.release();
    fs.unlinkSync(file.path);
  }
};

exports.findById = async (gausalaId, id) => {
  const dbClient = await Database.pool.connect();
  try {
    return await GalleryDal.findById(dbClient, gausalaId, id);
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

exports.update = async (gausalaId, id, url) => {
  const dbClient = await Database.pool.connect();
  try {
    return await GalleryDal.update(dbClient, gausalaId, id, url);
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
