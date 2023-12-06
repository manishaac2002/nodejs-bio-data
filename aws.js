

const { Upload } = require('@aws-sdk/lib-storage');
const { S3 } = require('@aws-sdk/client-s3');

const path = require('path');
const fs = require('fs');

const s3  = new S3({
  credentials:
  {
    accessKeyId     : 'AKIAU5JBRF44LLQXZBUC',
    secretAccessKey : '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'
  },
  region          : 'us-east-2'
});

const ObjectUpload = (filePath, bucket, key) => {
  
  return new Upload({
    client: s3,
    params: {
      Bucket: bucket,
      Key: key,
      Body: filePath
    }
  }).done()
  .then(() => {
    
  })
  .catch(e => {
    console.error("unable to upload");
  });
};

filePath   = path.join(__dirname,'upload','image.jpeg');
fileStream = fs.createReadStream(filePath);
bucket   = 'atre-s3-bucket';
key      = 'bujji.jpeg';


module.exports = { ObjectUpload } 