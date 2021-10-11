const { Image } = require("./models");
const image = require("./models/image");

async function list() {
  return await Image.findAll();
}

async function findImagebyPk(id) {
  return await Image.findOne({
    where: { id },
  });
}

async function findImageByUserId(userId) {
  return await Image.findAll({
    where: { userId },
  });
}

async function postImage(imageData) {
  const newImage = await image.create(imageData);
  return newImage;
}

async function deleteImage(imageId) {
  const image = await Image.findOne({
    where: { id },
  });
  image.destroy();
}

module.exports = {
  list,
  findImageByUserId,
  findImagebyPk,
  postImage,
  deleteImage,
};
