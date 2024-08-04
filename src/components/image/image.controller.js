const fs = require('fs');
const GalleryService = require('./image.service');
const ServerError = require('../../utility/serverError');
const { s3 } = require('../../service/aws');

exports.create = async (req, res, next) => {
  const { gausalaId } = req.user;

  try {
    const result = await GalleryService.create(gausalaId, req.file);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  const { gausalaId } = req.user;

  try {
    const result = await GalleryService.findAll(gausalaId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { file } = req;

  try {
    const image = await GalleryService.findById(req.user.gausalaId, id);
    if (!image) throw new ServerError('NOT_FOUND', 'Image not found.');
    const fileContent = fs.readFileSync(file.path);

    const params = {
      Bucket: 'gausala',
      Key: image.url.split('/').pop(),
      Body: fileContent,
    };

    const data = await s3.upload(params).promise();

    const result = await GalleryService.update(req.user.gausalaId, id, data.Location);
    fs.unlinkSync(file.path || '');
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { gausalaId } = req.user;
  const { id } = req.params;

  try {
    const image = await GalleryService.findById(gausalaId, id);
    if (!image) throw new ServerError('NOT_FOUND', 'Image not found.');

    const params = {
      Bucket: 'gausala',
      Key: image.url.split('/').pop(),
    };

    await s3.deleteObject(params).promise();

    await GalleryService.delete(gausalaId, id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
