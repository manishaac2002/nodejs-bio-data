
const multer = require('multer');
const path = require('path');

bucket = 'atre-health-tech' 
region = 'ap-south-1'

var storage = multer.diskStorage
({
      destination: 'uploads',
      
      filename: function (request, file, callBack) 
      {
          const fileRenamer = file.originalname.replace(/\.[^/.]+$/,"") +'_'+ Date.now() + path.extname(file.originalname)
          
          callBack(null, fileRenamer);
          request.renamedFile =  fileRenamer
          request.profileUrl  = `https://${bucket}.s3.${region}.amazonaws.com/${fileRenamer}`
      }
});

const uploadFile = multer({ storage: storage }).single('profile');

module.exports = { uploadFile }