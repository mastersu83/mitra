import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import galleryReducer from "./reducers/galleryReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas/gallerySaga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  gallery: galleryReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;

sagaMiddleware.run(rootSaga);

export type RootReducerType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
