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

const galleryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_PHOTOS":
      return {
        ...state,
        gallery: action.payload,
      };
    case "ADD_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default galleryReducer;
