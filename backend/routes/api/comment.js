const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const commentRepo = require("../../db/comment-repo");
const {Comment} = require("../../db/models");

router.get('/', asyncHandler(async function(req, res){
const comments = await commentRepo.commentList();
return res.json({comments})
}));

router.post('/', asyncHandler(async function(req, res){
    const {userId, userName, imageId, comment} = req.body;
    const newComment = await Comment.create({
        userId,
        userName,
        imageId,
        comment
    });
    return res.json({newComment});
}))

module.exports = router;
