import galleryApi from "./gallery.api";
import { setGallery } from "./gallery.reducer";

export const getGallery = () => async (dispatch) => {
  try {
    const resApi = await galleryApi.getGallery();
    if (resApi.success) {
      dispatch(setGallery(resApi?.data));
    } else {
      dispatch(setGallery([]));
    }
  } catch (err) {
    alert(err);
  }
};
