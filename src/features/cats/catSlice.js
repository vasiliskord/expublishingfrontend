import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import catService from "./catService";

const initialState = {
  catImages: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//get cat images
export const getCatImages = createAsyncThunk(
  "cat/getCatImages",
  async (_, thunkAPI) => {
    try {
      return await catService.getCatImages();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const catSlice = createSlice({
    name: "cat",
    initialState,
    reducers: {
        //reset state
        reset: (state) => {
            state.catImages = [];
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
        },

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getCatImages.pending, (state) => {
            state.isLoading = true;
        }
        )
        .addCase(getCatImages.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.catImages = action.payload;
        }
        )
        .addCase(getCatImages.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        }
        )
    }
});

export const { reset } = catSlice.actions;
export default catSlice.reducer;