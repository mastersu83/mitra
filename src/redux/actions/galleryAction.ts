import { GalleryType } from "../../types/galleryTypes";
import { InferActionsType } from "../reduxStore";

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
