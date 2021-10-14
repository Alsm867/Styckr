import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { viewImage, deleteImage } from "../../store/images";
import {useParams} from 'react-router-dom';
import DeleteButtonModal from '../DeleteModal/index';
import "./ImageDetailComponent.css";

const ImageDetail = () => {
  const [imageUrl, setImageUrl] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const imageId = useParams();
  useEffect(() => {
    dispatch(viewImage(userId, imageId));
  }, [dispatch, userId, imageId]);
  const images = useSelector(state => state.images)
  console.log("INSIDE IMAGE DATAIL COMP", imageId)

  console.log("LOGGING IMAGES IN STATE", images)

  console.log(userId)

  const image = images?.image

  console.log(image)


  const handleSubmit = async (e) => {
    e.preventDefault();
  };


  return (
    <div className="single-image-page">
      <img
        className="single-image"
        src={image}
        key={image}
        alt="forest"
      />
      <form onSubmit={handleSubmit} className="submit-comment">
        <textarea type="text" />
        <button type="submit" className="submit-bttn">
          Submit
        </button>
        <DeleteButtonModal/>
      </form>
    </div>
  );
};

export default ImageDetail;
