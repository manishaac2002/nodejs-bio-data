

const { Upload } = require('@aws-sdk/lib-storage');
const { S3 } = require('@aws-sdk/client-s3');

const path = require('path');
const fs = require('fs');
region = 'ap-south-1';
const s3  = new S3({
  credentials:
  {
    accessKeyId     : 'AKIAU5JBRF44LLQXZBUC',
    secretAccessKey : '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'
  },
  region            : 'ap-south-1'
});

const ObjectUpload = (bucket,renamedFile ) => {

    filePath   = path.join(__dirname,'uploads',renamedFile);
    fileStream = fs.createReadStream(filePath);
  
  return new Upload({
    client: s3,
    params: {
      Bucket: bucket,
      Key: renamedFile,
      Body: fileStream
    }
  }).done()
  .then(() => `https://${bucket}.s3.${region}.amazonaws.com/${renamedFile}`)
  .catch(e => {
    console.error("unable to upload");
  });
};

module.exports = { ObjectUpload }