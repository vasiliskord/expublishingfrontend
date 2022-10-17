import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import likeService from './likeService';
 
const like = JSON.parse(localStorage.getItem('like'));

const initialState = {
    likes: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

//like a cat image

export const likeCatImage = createAsyncThunk(
    'like/likeCatImage',
    async (catData, thunkAPI) => {
        try {
            return await likeService.likeCatImage(catData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

//unlike a cat image

export const unlikeCatImage = createAsyncThunk(
    'like/unlikeCatImage',
    async (catData, thunkAPI) => {
        try {
            return await likeService.unlikeCatImage(catData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(likeCatImage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(likeCatImage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.likes.push(action.payload);
                console.log(action.payload);
            })
            .addCase(likeCatImage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(unlikeCatImage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(unlikeCatImage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.likes = state.likes.filter((like) => like.id !== action.payload);
            })
            .addCase(unlikeCatImage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })

    }
});


export default likeSlice.reducer;
export const {reset} = likeSlice.actions;