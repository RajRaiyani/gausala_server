const NoticeService = require('./booking.service');

exports.create = async (req, res, next) => {
  const { gausalaId } = req.user;
  try {
    const result = await NoticeService.create(req.body, gausalaId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  const { gausalaId } = req.user;
  try {
    const result = await NoticeService.findAll(gausalaId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { gausalaId } = req.user;
  try {
    await NoticeService.update(gausalaId, id, req.body);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  const { gausalaId } = req.user;
  try {
    await NoticeService.delete(gausalaId, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
