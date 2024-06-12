var AWS = require("aws-sdk");

const listFolderFilesUrl = (folder) => {
  return new Promise((resolve, reject) => {
    try {
      AWS.config.update({
        region: process.env.REACT_APP_REG,
        accessKeyId: process.env.REACT_APP_A_K,
        secretAccessKey: process.env.REACT_APP_S_K,
      });
      var s3 = new AWS.S3();
      console.log({
        Bucket: process.env.REACT_APP_BCKT,
        Prefix: folder,
      });
      var command = s3.listObjectsV2({
        Bucket: process.env.REACT_APP_BCKT,
        Prefix: folder,
      });
      command.send((err, data) => {
        if (err) {
          console.log(err);
          reject({ ret: 0, err: err });
        } else {
          const files = data.Contents.map((file) => {
            return `https://${process.env.REACT_APP_BCKT}.s3.${process.env.REACT_APP_REG}.amazonaws.com/${file.Key}`;
          });
          resolve(files);
        }
      });
    } catch (error) {
      console.log(error);
      reject({ ret: 0, msg: error });
    }
  });
};
module.exports = {
  listFolderFilesUrl,
};
