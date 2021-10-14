import { csrfFetch } from "./csrf";

//reducer variables
const ADD_IMAGE = "images/add_image";
const REMOVE_IMAGE = "images/remove_image";
const VIEW_IMAGE = "images/view_image"

//actions
const uploadImage = (image) => {
  return {
    type: ADD_IMAGE,
    image,
  };
};

const getImage = (image) => {
  return {
    type: VIEW_IMAGE,
    image
  }
}

const addImage = (images, userId) => {
  return {
    type: ADD_IMAGE,
    payload: images,
    userId,
  };
};

const removeImage = (imageId) => {
  return {
    type: REMOVE_IMAGE,
    imageId,
  };
};

//action creators
export const viewImage = (userId, id) => async (dispatch) => {
  const response = await fetch(`/api/images/${userId}/${id.imageId}`);
  if(response.ok){
    const image = await response.json();

    console.log("IN VIEW IMAGE CREATER",image)
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

export const deleteImage = (imageId) => async (dispatch) => {
  // console.log("IN THE DELETE IMAGE!!!",imageId);
  const response = await csrfFetch(`/api/images/${imageId}`, {

    method: 'DELETE',

  })
  if (response.ok) {
    const deletedImageId = await response.json();
    console.log("IN THE DELETE IMAGE!!!",deletedImageId);
    return dispatch(removeImage(deletedImageId.imageId));
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
      console.log("IN IMAGE REDUCER", state)
      debugger
      delete newState.images[action.imageId];
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
