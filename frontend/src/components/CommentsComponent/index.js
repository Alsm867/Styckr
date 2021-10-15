// import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewComments } from "../../store/comments";
import DeleteCommentsModal from "../DeleteCommentsModal";
import "./CommentsComponent.css";

const Comments = ({ imageId, userId, comments }) => {
  //almost done here
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewComments());
  }, [dispatch]);
  return (
    <div className="comments">
      {comments?.map((comment) => (
          <div>
          <p key={comment.id}>{`${comment.userName}: ${comment.comment}`}</p>
        {comment.userId === userId ?
          <DeleteCommentsModal
                  imageId={imageId}
                  userId={userId}
                  comment={comment}
                /> : ''}
        </div>
      ))}
    </div>
  );
};

export default Comments;
