const NoticeDal = require('./notice.dal');
const Database = require('../../service/database');

// Create a new notice
exports.create = async (data) => {
  const dbClient = await Database.pool.connect();
  try {
    return await NoticeDal.create(dbClient, data);
  } finally {
    dbClient.release();
  }
};

// Read a notice
exports.read = async (date) => {
  const dbClient = await Database.pool.connect();
  try {
    return await NoticeDal.read(dbClient, date);
  } finally {
    dbClient.release();
  }
};

// Update a notice
exports.update = async (id, data) => {
  const dbClient = await Database.pool.connect();
  try {
    return await NoticeDal.update(dbClient, id, data);
  } finally {
    dbClient.release();
  }
};

// Delete a notice
exports.delete = async (id) => {
  const dbClient = await Database.pool.connect();
  try {
    return await NoticeDal.delete(dbClient, id);
  } finally {
    dbClient.release();
  }
};
