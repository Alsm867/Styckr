import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getImage } from "../../store/images";
import "./ImageDetailComponent.css";

const ImageDetail = () => {
  const [imageUrl, setImageUrl] = useState("");
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images[userId]);
  console.log(images)
  useEffect(()=>{
      dispatch(getImage(userId))
    },[dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

  return (
      <div className='single-image-page'>
         <img className="single-image" src={images?.images[0].imageUrl} key={imageUrl} alt='forest'/>
         <form onSubmit={handleSubmit} className="submit-comment">
         <textarea type='text'/>
         <button type='submit' className='submit-bttn' >Submit</button>
         </form>
      </div>
  );
};

export default ImageDetail;
