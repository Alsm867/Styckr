import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { viewAllImages, deleteImage } from "../../store/images";
import {useParams} from 'react-router-dom';

const AllImages = () => {
    const sessionUser = useSelector(state => state.session.user);
    // const [userId, setUserId] = useState(sessionUser.id);
    const userId = sessionUser.id;
    const [imageUrl, setImageUrl] = useState('');
    const [toggle, setToggle] = useState(true);
    // const history = useHistory();
    const dispatch = useDispatch();
    const images = useSelector(state => state.images.allImages)
    console.log("INSIDE ALL IMAGES COMPONENT",  images)
    useEffect(()=>{
      dispatch(viewAllImages())
        },[])

        // const handleSubmit = async (e) => {
        //   e.preventDefault();

        //   const payload = {
        //     userId,
        //     imageUrl,
        //   };
        //   const addImage = await dispatch(upload(payload));
        //   setToggle(!toggle);
        //   // if (addImage) {
        //   //   history.push(`/images/${userId}`)
        //   // }
        //   setImageUrl('');
        // }
        return (
          <div>
            <div className="image-page">
            {images?.map(image=>
              <a href={`/images/${userId}/${image.id}`} key={image.id}>
                <img src={image.imageUrl}  alt='profile' className='the-images' />
              </a>)}
            </div>
          </div>
        );

      };

      export default AllImages;
