
//reducer variables
const ADD_IMAGE = 'images/add_image';
const REMOVE_IMAGE = 'images/remove_image';

//actions
const uploadImage = (image) => {
  return {
    type: ADD_IMAGE,
    image
  };
};

const addImage = (images, userId) => {
    return {
        type: ADD_IMAGE,
        payload: userId,
        images
    }
}

const removeImage = (image) => {
  return {
    type: REMOVE_IMAGE,
    image

  };
};

//action creators
export const getImage = (userId) => async (dispatch) => {
    const response = await fetch(`/api/images/${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
    if(response.ok){
        const images = await response.json();
        dispatch(addImage(images, userId));
    }
}



export const upload = () => async (dispatch) => {
    const response = await fetch('/api/images', {
      method: 'POST',
      body: JSON.stringify({
          userId,
          imageId,
          imageUrl
      })
    });
    dispatch();
    return response;
  };

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };

export const demoLogin = () => async dispatch => {
  const response = await csrfFetch('/api/session/demo');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
}

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

//reducer itself
const initialState = { images: null };

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_IMAGE:
      newState = Object.assign({}, state);
      newState[action.payload] = action.payload;
      return newState;
    case REMOVE_IMAGE:
    //TODO I NEED TO FINISH THIS
      newState = Object.assign({}, state);
      newState.action.payload = ();
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
