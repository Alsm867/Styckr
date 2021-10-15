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
  useEffect(() => {
    dispatch(viewImage(userId, imageId));
  }, [dispatch, userId, imageId]);

const singleImage = useSelector(state => state.images.image)

  return (
    <div className="single-image-page">
      <DeleteButtonModal imageId={imageId} userId={userId}/>
      <img
        className="single-image"
        src={singleImage}
        alt="forest"
      />
      <Comments />
      <CommentButtonModal />
    </div>
  );
};

export default ImageDetail;
