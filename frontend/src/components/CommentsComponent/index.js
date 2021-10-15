// import {useParams} from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewComments } from "../../store/comments";
import DeleteCommentsModal from "../DeleteCommentsModal";
import "./CommentsComponent.css";

const Comments = ({ imageId, userId, comments }) => {
  //almost done here
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comments.comments.comments);

  let something;

    comment?.map(comment => {
        if (comment.userId === userId){
            something = (
                <DeleteCommentsModal
                  imageId={imageId}
                  userId={userId}
                  comments={comments}
                />
              );
        }
})


  useEffect(() => {
    dispatch(viewComments());
  }, [dispatch]);
  console.log("INSIDE COMMENTS");
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
