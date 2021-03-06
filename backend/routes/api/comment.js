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

router.delete('/:commentId', asyncHandler(async function(req, res){
    let {commentId} = req.params
    const comment = await commentRepo.deleteComment(commentId);
    return res.json();
}))

router.put("/:commentId", asyncHandler(async function (req, res) {
    const UpdatedEvent = await Comment.findByPk(req.params.commentId)
    const id = req.params.commentId
    await UpdatedEvent.update(
      req.body
    )
    return res.json({UpdatedEvent});
  }));


module.exports = router;
