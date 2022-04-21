import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { GalleryType } from "../../types/galleryTypes";
import { addDetails, fetchPhotos, getPhotos } from "../reducers/gallerySlice";
import { PayloadAction } from "@reduxjs/toolkit";

const getTasks = async (id: number) => {
  return await axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_limit=6`)
    .then((resp) => resp.data);
};

export function* getPhotosWorkerSaga(id: number) {
  let data: GalleryType[] = yield call(getTasks, id);
  yield put(getPhotos(data));
}
export function* watchPhotosSaga() {
  yield takeEvery(fetchPhotos.type, (action: PayloadAction<number>) =>
    getPhotosWorkerSaga(action.payload)
  );
}
export function* getDetailsWorkerSaga(item: GalleryType) {
  yield put(addDetails(item));
}
export function* watchDetailsSaga() {
  yield takeEvery(addDetails, (action: PayloadAction<GalleryType>) =>
    getDetailsWorkerSaga(action.payload)
  );
}

export default function* rootSaga() {
  yield watchPhotosSaga();
  yield watchDetailsSaga();
}
