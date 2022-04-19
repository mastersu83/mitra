import { GalleryType } from "../../types/galleryTypes";
import { InferActionsType } from "../reduxStore";

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

export type ActionsType = InferActionsType<typeof galleryActions>;

export const galleryActions = {
  fetchPhotoAction: (id: number) =>
    ({
      type: "FETCH_PHOTOS",
      payload: id,
    } as const),

  getPhotoAction: (payload: GalleryType[]) =>
    ({
      type: "GET_PHOTOS",
      payload,
    } as const),

  addDetailsAction: (item: GalleryType) =>
    ({
      type: "ADD_DETAILS",
      payload: item,
    } as const),
};
