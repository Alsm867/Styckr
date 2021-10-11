const express = require('express');
const asyncHandler = require('express-async-handler');

const imageRepo = require("../../db/image-repo");

const router = express.Router();

router.get('/', asyncHandler(async function(req, res){
    const images = await imageRepo.list();
    return res.json(images);
}));

router.get('/:id', asyncHandler(async function(req, res){
    const images = await imageRepo.findImageByUserId(req.params.id);
    return res.json(images);
}));

module.exports = router;
