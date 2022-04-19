import { GalleryType } from "../../types/galleryTypes";

export type GetPhotoActionType = {
  type: string;
  payload: GalleryType[];
};

export const getPhotoAction = (payload: GalleryType[]): GetPhotoActionType => ({
  type: "GET_PHOTOS",
  payload,
});

export type FetchPhotoActionType = {
  type: string;
  payload: number;
};
export const fetchPhotoAction = (id: number): FetchPhotoActionType => ({
  type: "FETCH_PHOTOS",
  payload: id,
});

export type AddDetailsActionType = {
  type: string;
  payload: GalleryType;
};

export const addDetailsAction = (item: GalleryType): AddDetailsActionType => ({
  type: "ADD_DETAILS",
  payload: item,
});

export type ActionsType =
  | GetPhotoActionType
  | FetchPhotoActionType
  | AddDetailsActionType;
