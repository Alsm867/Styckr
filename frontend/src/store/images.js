import { csrfFetch } from "./csrf";

//reducer variables
const ADD_IMAGE = "images/add_image";
const REMOVE_IMAGE = "images/remove_image";

//actions
const uploadImage = (image) => {
  return {
    type: ADD_IMAGE,
    image,
  };
};

const addImage = (images, userId) => {
  return {
    type: ADD_IMAGE,
    payload: images,
    userId,
  };
};

const removeImage = (image) => {
  return {
    type: REMOVE_IMAGE,
    image,
  };
};

//action creators
export const getImage = (userId) => async (dispatch) => {
  const response = await fetch(`/api/images/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const images = await response.json();
    console.log(images);
    dispatch(addImage(images, userId));
  }
};

export const deleteImage = (imageId) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${imageId}`, {
    method: 'DELETE',

  })
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
const initialState = { images: null };

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_IMAGE:
      newState = Object.assign({}, state);
      newState[action.userId] = action.payload;
      return newState;
    case REMOVE_IMAGE:
      newState = Object.assign({}, state);
      delete newState.images[action.payload.userId];
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
