const NoticeService = require('./notice.service');

// Create a new notice
exports.create = async (req, res, next) => {
  try {
    const notice = await NoticeService.create(req.body);
    res.status(201).json(notice);
  } catch (err) {
    next(err);
  }
};

// Read a notice
exports.read = async (req, res, next) => {
  const { date } = req.query;
  try {
    const notice = await NoticeService.read(date);
    res.json(notice);
  } catch (err) {
    next(err);
  }
};

// Update a notice
exports.update = async (req, res, next) => {
  try {
    const notice = await NoticeService.update(req.params.id, req.body);
    res.json(notice);
  } catch (err) {
    next(err);
  }
};

// Delete a notice
exports.delete = async (req, res, next) => {
  try {
    await NoticeService.delete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
