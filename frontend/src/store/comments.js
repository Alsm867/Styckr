import { csrfFetch } from "./csrf";

const ADD_COMMENT = "comments/add_comment";
const VIEW_COMMENT = "comments/view_comment";
const REMOVE_COMMENT = "comments/remove_comment";


const getComments = (comment) => {
    return {
        type: VIEW_COMMENT,
        comment
    };
};

const addComment = (comment)=> {
    return {
        type: ADD_COMMENT,
        comment
    }
}

const deleteComment = ()=> {
    return {
        type: REMOVE_COMMENT,
    }
}

export const deleteAComment = (commentId) => async (dispatch) => {
    // console.log("IN THE DELETE COMMENT!!!",commentId[0].comment);
    const response = await csrfFetch(`/api/comments/${commentId}`, {

      method: 'DELETE',

    })
    if (response.ok) {
      dispatch(deleteComment());
    }

  }

export const PostComment = (input) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const { newComment } = await response.json();
      dispatch(addComment(newComment));
    }
  };


export const viewComments = () => async (dispatch) => {
    const response = await fetch(`/api/comments/`);
    if(response.ok){
        const comments = await response.json();
        dispatch(getComments(comments))
    }
}


const initialState = {comments: []};

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case VIEW_COMMENT:
            newState = Object.assign({}, state);
            newState.comments = action.comment;
            return newState;
        case ADD_COMMENT:
            newState = {...state, comment: [...state.comments]};
                console.log("INSIDE COMMENT REDUCER",state.comments)
            newState.comments.push(action.comment);
            return newState;
        case REMOVE_COMMENT:
            newState = {...state}
            delete newState[action.comment]
            return newState;
        default:
            return state;
    }
};

export default commentReducer;
