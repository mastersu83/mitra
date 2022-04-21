import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import gallerySlice from "./reducers/gallerySlice";
import rootSaga from "./sagas/gallerySaga";

const sagaMiddleware = createSagaMiddleware();

export const setupStore = () => {};

const storeToolkit = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
  middleware: [sagaMiddleware],
});

export default storeToolkit;

sagaMiddleware.run(rootSaga);

export type AppStoreType = ReturnType<typeof storeToolkit.getState>;
