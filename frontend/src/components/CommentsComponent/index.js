// import {useParams} from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { viewComments } from "../../store/comments";
import DeleteCommentsModal from "../DeleteCommentsModal";
import EditButton from "../EditCommentComponent";
import "./CommentsComponent.css";

const Comments = ({ imageId, userId, comments }) => {
  //almost done here
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewComments(imageId));
  }, [dispatch, imageId]);
  return (
    <div className="comments">
      {comments?.map((comment) => (
          <div key={comment.id}>
          <p className='the-comment' key={comment.id}><span className="user" key={comment.userName} >{`${comment.userName}:`}</span> <br/> <span className='user-comment' key={comment.id} >{`${comment.comment}`}</span></p>
        {comment.userId === userId ?
          <div>
            <EditButton className='edit' imageId={imageId} userId={userId} comment={comment}/>
            <DeleteCommentsModal imageId={imageId} userId={userId} comment={comment}/>
          </div>
            : ''
          }
        </div>
      ))}
    </div>
  );
};

export default Comments;
