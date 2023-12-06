
const multer = require('multer');
const path = require('path');

var storage  = multer.diskStorage(
  {
      destination : 'uploads',  
      filename    : function(req, file ,cb)
                    {
                        cb(null,Date.now() + path.extname(file.originalname));
                    }
  });

const fileName = storage.filename;
const uploadFile = multer({storage : storage}).single('profile');

module.exports = { uploadFile , fileName }