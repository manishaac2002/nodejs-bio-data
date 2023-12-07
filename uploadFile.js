
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: 'uploads',
  filename: function (request, file, callBack) 
  {
      const fileRenamer = file.originalname.replace(/\.[^/.]+$/,"") +'_'+ Date.now() + path.extname(file.originalname)
      callBack(null, fileRenamer);
      request.renamedFile = fileRenamer
  }
});

const uploadFile = multer({ storage: storage }).single('profile');

module.exports = { uploadFile }