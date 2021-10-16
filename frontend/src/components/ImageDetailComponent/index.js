import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { viewImage, deleteImage } from "../../store/images";
import {useParams} from 'react-router-dom';
import DeleteButtonModal from '../DeleteModal/index';
import CommentButtonModal from '../CommentsModal/index';

import Comments from '../CommentsComponent/index';
import "./ImageDetailComponent.css";

const ImageDetail = () => {
  const [imageUrl, setImageUrl] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const {imageId} = useParams();
  const comments = useSelector((state) => state.comments.comments.comments)
  // console.log('INSIDE IMAGE DETAIL',comments)

  useEffect(() => {
    dispatch(viewImage(userId, imageId));
  }, [dispatch, userId, imageId]);
const singleImage = useSelector(state => state.images.image)

  return (
    <div className="single-image-page">
      <img
        className="single-image"
        src={singleImage}
        alt="forest"
      />
      <DeleteButtonModal imageId={imageId} userId={userId}/>
      <Comments comments={comments} imageId={imageId} userId={userId} />

      <CommentButtonModal />
    </div>
  );
};

export default ImageDetail;
