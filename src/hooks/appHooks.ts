import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../redux/reduxStorу";
import { gallerySlice } from "../redux/reducers/gallerySlice";
import { bindActionCreators } from "redux";

const AllActions = {
  ...gallerySlice.actions,
};

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllActions, dispatch);
};
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
