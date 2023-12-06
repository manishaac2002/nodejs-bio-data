
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: 'uploads',
  filename: function (req, file, cb) 
  {
      const fileRenamer = file.originalname.replace(/\.[^/.]+$/,"") +'_'+ Date.now() + path.extname(file.originalname)
      cb(null, fileRenamer);
      req.renamedFile = fileRenamer
  }
});

const uploadFile = multer({ storage: storage }).single('profile');

module.exports = { uploadFile }