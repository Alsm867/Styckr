import { csrfFetch } from "./csrf";

//reducer variables
const ADD_IMAGE = "images/add_image";
const REMOVE_IMAGE = "images/remove_image";
const VIEW_IMAGE = "images/view_image";
const ALL_IMAGES = 'images/all_images';

//actions
// const uploadImage = (image) => {
//   return {
//     type: ADD_IMAGE,
//     image,
//   };
// };

const getImage = (image) => {
  return {
    type: VIEW_IMAGE,
    image
  }
}

const getAllImages = (images)=> {
  // console.log("INSIDE GET ALL IMAGES ACTION", images)
  return {
    type: ALL_IMAGES,
    images
  }
}

const addImage = (images, userId) => {
  return {
    type: ADD_IMAGE,
    payload: images,
    userId,
  };
};

const removeImage = (imageId, userId) => {
  return {
    type: REMOVE_IMAGE,
    imageId, userId
  };
};

//action creators
export const viewAllImages = () => async (dispatch) => {
  // console.log("INSIDE VIEW ALL IMAGES")
  const response = await fetch(`/api/images/`);
  if(response.ok){
    const {images} = await response.json();

    // console.log("IN VIEW ALL IMAGES",images)
  dispatch(getAllImages(images))
  }
}


export const viewImage = (userId, id) => async (dispatch) => {
  const response = await fetch(`/api/images/${userId}/${id}`);
  if(response.ok){
    const image = await response.json();

    // console.log("IN VIEW IMAGE CREATER",image)
  dispatch(getImage(image.image.imageUrl))
  }
}

export const addingImage = (userId) => async (dispatch) => {
  const response = await fetch(`/api/images/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const images = await response.json();
    dispatch(addImage(images, userId));
  }
};

export const deleteImage = (imageId, userId) => async (dispatch) => {
  // console.log("IN THE DELETE IMAGE!!!",imageId);
  const response = await csrfFetch(`/api/images/${imageId}`, {

    method: 'DELETE',

  })
  if (response.ok) {
    const{imageId} = await response.json();
    // console.log("IN THE DELETE IMAGE!!!",imageId);
    return dispatch(removeImage(imageId.imageId, userId));
  }

}

export const upload = (userId, imageUrl) => async (dispatch) => {
  const response = await csrfFetch("/api/images/new", {
    method: "POST",
    body: JSON.stringify({
      userId,
      imageUrl,
    }),
  });
  if (response.ok) {
    const data = response.json();
    dispatch(addImage(data));
    return response;
  }
};

//reducer itself
const initialState = {};

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ALL_IMAGES:
      newState = Object.assign({}, state);
      newState.allImages = action.images;
      return newState;
    case VIEW_IMAGE:
      newState = Object.assign({}, state);
      newState.image = action.image;
      return newState;
    case ADD_IMAGE:
      newState = Object.assign({}, state);
      newState[action.userId] = action.payload;
      return newState;
    case REMOVE_IMAGE:
      newState = {...state}
      // console.log("IN IMAGE REDUCER", state)
      delete newState[action.imageId]
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
