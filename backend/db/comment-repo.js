const {Comment} = require('./models');
const comment = require('./models/comment');

async function commentList() {
    return await Comment.findAll();
  }

  async function findCommentbyPk(id) {
    return await Comment.findOne({
      where: { id },
    });
  }

async function updateComment(comment){
  const id = comment.id;
  delete comment.id;
  await Comment.update(
    comment,
    {
      where: {id},
      

    }
    )
}

  async function findCommentsByUserId(userId, imageId) {
    return await Comment.findAll({
      where: { userId, imageId },
    });
  }

  async function postComment(commentData) {
    const newComment = await comment.create(commentData);
    return newComment;
  }

  async function deleteComment(commentId) {
    const comment = await findCommentbyPk(commentId)
    console.log("***************",comment)
    await comment.destroy();
  }

  module.exports = {
    commentList,
    findCommentbyPk,
    findCommentsByUserId,
    postComment,
    deleteComment
  }
