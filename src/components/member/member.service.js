const Database = require('../../service/database');
const MemberDal = require('./member.dal');

exports.create = async (gausalaId, data) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await MemberDal.create(dbClient, gausalaId, data);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.findAll = async (gausalaId) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await MemberDal.findAll(dbClient, gausalaId);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.update = async (gausalaId, id, data) => {
  const dbClient = await Database.pool.connect();
  try {
    const result = await MemberDal.update(dbClient, gausalaId, id, data);
    return result;
  } finally {
    dbClient.release();
  }
};

exports.delete = async (gausalaId, id) => {
  const dbClient = await Database.pool.connect();
  try {
    await MemberDal.delete(dbClient, gausalaId, id);
  } finally {
    dbClient.release();
  }
};
