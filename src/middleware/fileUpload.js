const multer = require('multer');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const ServerError = require('../utility/serverError');

const uploadDirectory = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    cb(null, `${uuidv4()}${extension}`);
  },
});

const imageFileExtensions = ['jpg', 'jpeg', 'png', 'webp', 'tiff', 'bmp', 'svg', 'ico', 'heif', 'heic'];

const fileFilter = (req, file, cb) => {
  const fileExtension = path.extname(file.originalname).toLowerCase().slice(1);
  if (imageFileExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new ServerError('INVALID_DATA', 'Please upload a valid image file (jpg, jpeg, png, webp, etc.).'), false);
  }
};

module.exports = fileFilter;

const upload = multer({ storage, fileFilter });

module.exports = upload;
