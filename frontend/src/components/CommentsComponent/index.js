// import {useParams} from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewComments } from "../../store/comments";
import DeleteCommentsModal from "../DeleteCommentsModal";
import "./CommentsComponent.css";

const Comments = ({ imageId, userId, commentss }) => {
  //almost done here
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comments.comments.comments);
  const comments = useSelector((state) => state.comments.comments);
//   let ha = comments.map(comment => comment.userId)
  useEffect(() => {
    dispatch(viewComments());
  }, [dispatch]);
  console.log("INSIDE COMMENTS", comment.userId);
  let something;
  if (userId == comments.userId) {
    something = (
      <DeleteCommentsModal
        imageId={imageId}
        userId={userId}
        comments={comments}
      />
    );
  }
  return (
    <div className="comments">
      {comment?.map((ele) => (
        <div>
          <p key={ele.id}>{`${ele.userName}: ${ele.comment}`}</p>
          {something}
        </div>
      ))}
    </div>
  );
};

export default Comments;
