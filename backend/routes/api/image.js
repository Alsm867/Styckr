const express = require("express");
const asyncHandler = require("express-async-handler");

const imageRepo = require("../../db/image-repo");
const { Comment } = require("../../db/models");

const router = express.Router();
router.get(
  "/:id/comments",
  asyncHandler(async function (req, res) {
    const comments = await Comment.findAll({
      where: { imageId: +req.params.id },
    });
    res.json(comments);
  })
);

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const images = await imageRepo.list();
    return res.json({ images });
  })
);

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const images = await imageRepo.findImageByUserId(req.params.id);
    return res.json({ images });
  })
);

router.get(
  "/:userId/:imageId",
  asyncHandler(async function (req, res) {
    const image = await imageRepo.findImagebyPk(req.params.imageId);
    return res.json({ image });
  })
);

router.delete(
  "/:imageId",
  asyncHandler(async function (req, res) {
    let { imageId } = req.params;
    const image = await imageRepo.deleteImage(imageId);
    return res.json({ imageId });
  })
);

router.post(
  "/new",
  asyncHandler(async function (req, res) {
    // console.log("INSIDE POST ROUTE", req.body);
    const { userId, imageUrl } = req.body;
    const image = await imageRepo.postImage(userId, imageUrl);
    return res.json({ image });
  })
);

module.exports = router;
