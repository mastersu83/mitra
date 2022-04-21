import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GalleryType } from "../../types/galleryTypes";

type InitialStateType = {
  gallery: GalleryType[];
  categories: number;
  details: GalleryType | null;
};

const initialState: InitialStateType = {
  gallery: [],
  categories: 1,
  details: null,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    getPhotos: (
      state: InitialStateType,
      action: PayloadAction<GalleryType[]>
    ) => {
      state.gallery = action.payload;
    },
    fetchPhotos: (state: InitialStateType, action: PayloadAction<number>) => {
      state.categories = action.payload;
    },
    addDetails: (
      state: InitialStateType,
      action: PayloadAction<GalleryType>
    ) => {
      state.details = action.payload;
    },
  },
});

export const { addDetails, fetchPhotos, getPhotos } = gallerySlice.actions;

export default gallerySlice.reducer;
