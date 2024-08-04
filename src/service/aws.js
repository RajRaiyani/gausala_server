const AWS = require('aws-sdk');
const vars = require('../config/var');

const s3 = new AWS.S3({
  accessKeyId: vars.aws.accessKeyId,
  secretAccessKey: vars.aws.secretAccessKey,
  region: vars.aws.region,
});

module.exports = { s3 };
