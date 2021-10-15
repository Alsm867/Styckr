// import {useParams} from 'react-router-dom';
import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {viewComments} from "../../store/comments";
import "./CommentsComponent.css";


const Comments = () => {
    //almost done here
    const dispatch = useDispatch();
    const comment = useSelector((state) => state.comments.comments.comments);
    useEffect(() => {
        dispatch(viewComments());
    }, [dispatch])
    console.log("INSIDE COMMENTS", comment)
    return (
        <div className="comments">
            {comment?.map((ele) => <p key={ele.id}>{`${ele.userName}: ${ele.comment}`}</p> )}

        </div>
    )
}




export default Comments;
