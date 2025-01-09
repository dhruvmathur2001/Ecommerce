const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dipmmjfgn",
  api_key: "432215816589853",
  api_secret: "0sECbrzJGF-Gun04ELD8f4vyxb8",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}  

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
