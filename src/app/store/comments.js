import { createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
        commentsRecived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        commentRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;

const {
    commentsRequested,
    commentsRecived,
    commentsRequestFailed,
    commentCreated,
    commentRemoved
} = actions;

export const loadCommentsList = (userId) => async (dispatch) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentService.getComments(userId);
        dispatch(commentsRecived(content));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};

export const createComment = (data) => async (dispatch) => {
    try {
        const { content } = await commentService.createComment(data);
        dispatch(commentCreated(content));
    } catch (error) {
        console.log(error);
    }
};

export const removeComment = (commentId) => async (dispatch) => {
    try {
        const { content } = await commentService.removeComment(commentId);
        if (content === null) {
            dispatch(commentRemoved(commentId));
        }
    } catch (error) {
        console.log(error);
    }
};

export const getComments = () => (state) => state.comments.entities;

export const getCommentsLoadingStatus = () => (state) =>
    state.comments.isLoading;

export default commentsReducer;
