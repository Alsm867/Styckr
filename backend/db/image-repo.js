const { Image, User } = require("./models");
// const image = require("./models/image");
//
async function list() {
  return await Image.findAll();
}

async function findImagebyPk(id) {
  const image = await Image.findByPk(id);
  console.log('INSIDE FIND BY PK', image)
  return image
}

async function findImageByUserId(userId) {
  return await Image.findAll({
    where: { userId },
  });
}

async function postImage(userId, imageUrl) {
  console.log("INSIDE POSTIMAGE", userId, imageUrl);
  const newImage = await Image.create(userId, imageUrl);
  return newImage;
}

async function deleteImage(imageId) {
  const image = await Image.findOne({
    where: { id: imageId },
  });
  image.destroy();
  return imageId;
}

module.exports = {
  list,
  findImageByUserId,
  findImagebyPk,
  postImage,
  deleteImage,
};
