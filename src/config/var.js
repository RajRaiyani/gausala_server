/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

const env = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.SERVER_PORT || 3007,
  serviceName: process.env.SERVICE_NAME || 'Gausala',
  jwtSecret: process.env.JWT_SECRET,
  apiKey: process.env.API_KEY,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  },
  consoleLogLevel: process.env.CONSOLE_LOG_LEVEL || 'info',
  fileLogLevel: process.env.FILE_LOG_LEVEL || 'block',
};

// Define validation for all the env vars
const envSchema = Joi.object({
  env: Joi.string().required().valid('dev', 'prod'),
  port: Joi.number().required().min(1024).max(65535),
  serviceName: Joi.string().required().min(3).max(255),
  jwtSecret: Joi.string().required().min(3).max(1024),
  apiKey: Joi.string().required(),
  database: Joi.object({
    host: Joi.string().required().min(3).max(255),
    port: Joi.number().required().min(1024).max(65535),
    user: Joi.string().required().min(3).max(255),
    password: Joi.string().allow(''),
    database: Joi.string().required().min(3).max(255),
  }),
  aws: Joi.object({
    accessKeyId: Joi.string().required().min(3).max(255),
    secretAccessKey: Joi.string().required().min(3).max(255),
    region: Joi.string().required().min(3).max(255),
  }),

  consoleLogLevel: Joi.string().required().valid('false', 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'),
  fileLogLevel: Joi.string().required().valid('false', 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'),
});

// Validate env vars
const { error } = envSchema.validate(env);

// Throw an error if env vars are not valid
if (error) throw new Error(`ENV validation error: ${error.message}`);

// Export valid env vars
module.exports = {
  env: env.env,
  port: env.port,
  jwtSecret: env.jwtSecret,
  apiKey: env.apiKey,

  database: {
    host: env.database.host,
    port: env.database.port,
    user: env.database.user,
    password: env.database.password,
    database: env.database.database,
  },

  aws: {
    accessKeyId: env.aws.accessKeyId,
    secretAccessKey: env.aws.secretAccessKey,
    region: env.aws.region,
  },

  loggerOptions: {
    env: env.env,
    consoleLogLevel: env.consoleLogLevel,
    fileLogLevel: env.fileLogLevel,
    appName: env.serviceName,
  },
};
