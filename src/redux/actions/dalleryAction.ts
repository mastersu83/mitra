import { GalleryType } from "../../types/galleryTypes";

export const getPhotoAction = (payload: GalleryType[]) => ({
  type: "GET_PHOTOS",
  payload,
});
export const fetchPhotoAction = (id: number) => ({
  type: "FETCH_PHOTOS",
  id,
});
export const addDetailsAction = (item: GalleryType) => ({
  type: "ADD_DETAILS",
  payload: item,
});
