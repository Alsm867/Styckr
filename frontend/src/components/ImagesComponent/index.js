import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState} from 'react';
import {getImage, upload} from '../../store/images';
// import { useHistory } from 'react-router-dom';
import './ImagesComponent.css';


const Profile = () => {
const sessionUser = useSelector(state => state.session.user);
// const [userId, setUserId] = useState(sessionUser.id);
const userId = sessionUser.id;
const [imageUrl, setImageUrl] = useState('');
const [toggle, setToggle] = useState(true);
// const history = useHistory();
const dispatch = useDispatch();
const images = useSelector(state => state.images[userId])
useEffect(()=>{
  dispatch(getImage(userId))
    },[dispatch, toggle])

    const handleSubmit = async (e) => {
      e.preventDefault();

      const payload = {
        userId,
        imageUrl,
      };
      const addImage = await dispatch(upload(payload));
      setToggle(!toggle);
      // if (addImage) {
      //   history.push(`/images/${userId}`)
      // }
      setImageUrl('');
    }
    return (
      <div>
        <div className="image-url">
        <form onSubmit={handleSubmit}>
          <input type="text" value={imageUrl} onChange={((e)=> setImageUrl(e.target.value))} placeholder="url goes here"></input>
          <button type="submit">Submit</button>
        </form>
        </div>
        <div className="image-page">
        {images?.images.map(image=> <img src={image.imageUrl} key={image.id} alt='profile' className='the-images' />)}
        </div>
      </div>
    );

  };

  export default Profile;
