
const multer = require('multer');
const path = require('path');

fileName ="";
var storage  = multer.diskStorage(
  {
      destination : 'uploads',  
      filename    : function(req, file ,cb)
                    {
                        fileName = Date.now() + path.extname(file.originalname);
                        cb(null,fileName);
                    }
  });

const uploadFile = multer({storage : storage}).single('profile');

module.exports = { uploadFile , fileName }