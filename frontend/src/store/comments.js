import { csrfFetch } from "./csrf";

const ADD_COMMENT = "comments/add_comment";
const VIEW_COMMENT = "comments/view_comment";
const REMOVE_COMMENT = "comments/remove_comment";
const UPDATE_COMMENT = "comments/update_comment";

const getComments = (comment) => {
  return {
    type: VIEW_COMMENT,
    comment,
  };
};

const updateComment = (comment) => {
    return {
      type: UPDATE_COMMENT,
      comment,
    };
  };

const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment,
  };
};

const deleteComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId,
  };
};

export const editComment = (input, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`, {
      method: "PUT",
      body: JSON.stringify(input),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const { comment } = await response.json();
      dispatch(updateComment(comment));
    }
  };


export const deleteAComment = (commentId) => async (dispatch) => {
  // console.log("IN THE DELETE COMMENT!!!",commentId[0].comment);
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteComment(commentId));
  }
};

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

export const viewComments = (imageId) => async (dispatch) => {
  const response = await fetch(`/api/images/${imageId}/comments/`);
  if (response.ok) {
    const comments = await response.json();
    dispatch(getComments({comments}));
  }
};

const initialState = { comments: [] };

const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case VIEW_COMMENT:
      newState = {}
      newState.comments = action.comment;
      return newState;
    case ADD_COMMENT:
      newState = {
        ...state,
        comments: { comments: [...state.comments.comments] },
      };
      newState.comments.comments.push(action.comment);
      return newState;
    case REMOVE_COMMENT:
      const index = state.comments.comments.findIndex(
        (ele) => ele.id === action.commentId
      );
      newState = {
        ...state,
        comments: {
          ...state.comments,
          comments: [
            ...state.comments.comments.slice(0, index),
            ...state.comments.comments.slice(index + 1),
          ],
        },
      };
      return newState;
      case UPDATE_COMMENT:{
          const index = state.comments.comments.findIndex(
            (ele) => ele.id === action.comment.id
          );
          newState = {
            ...state,
            comments: {
              ...state.comments,
              comments: [
                ...state.comments.comments.slice(0, index),
                action.comment,
                ...state.comments.comments.slice(index + 1),
              ],
            },
          };
          return newState;
      }
    default:
      return state;
  }
};

export default commentReducer;
