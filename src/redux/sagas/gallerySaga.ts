import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { galleryActions } from "../actions/galleryAction";
import { GalleryType } from "../../types/galleryTypes";

const getTasks = async (id: number) => {
  return await axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_limit=6`)
    .then((resp) => resp.data);
};

export function* getPhotosWorkerSaga(id: number) {
  let data: GalleryType[] = yield call(getTasks, id);
  yield put(galleryActions.getPhotoAction(data));
}
export function* watchPhotosSaga() {
  yield takeEvery("FETCH_PHOTOS", (action: { type: string; payload: number }) =>
    getPhotosWorkerSaga(action.payload)
  );
}
export function* getDetailsWorkerSaga(item: GalleryType) {
  yield put(galleryActions.addDetailsAction(item));
}
export function* watchDetailsSaga() {
  yield takeEvery(galleryActions.addDetailsAction, (action) =>
    getDetailsWorkerSaga(action.payload)
  );
}

export default function* rootSaga() {
  yield watchPhotosSaga();
  yield watchDetailsSaga();
}
