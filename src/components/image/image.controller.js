const GalleryService = require('./image.service');

exports.create = async (req, res) => {
  const { gausalaId } = req.params;
  const data = req.body;

  try {
    const result = await GalleryService.create(gausalaId, data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  const { gausalaId } = req.user;

  try {
    const result = await GalleryService.findAll(gausalaId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const result = await GalleryService.update(req.user.gausalaId, id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  const { gausalaId, id } = req.params;

  try {
    await GalleryService.delete(gausalaId, id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
