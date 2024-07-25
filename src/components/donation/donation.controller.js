const DonationService = require('./donation.service');

exports.create = async (req, res, next) => {
  const { gausalaId } = req.user;
  try {
    const result = await DonationService.create(gausalaId, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  const { gausalaId } = req.user;
  try {
    const result = await DonationService.findAll(gausalaId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { gausalaId } = req.user;
  try {
    await DonationService.update(gausalaId, id, req.body);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  const { gausalaId } = req.user;
  try {
    await DonationService.delete(gausalaId, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
