import expertApi from "./expert.api";
import { setExpert } from "./expert.reducer";

export const getExpert = () => async (dispatch) => {
  try {
    const resApi = await expertApi.getExpert();
    if (resApi.success) {
      dispatch(setExpert(resApi?.data));
    } else {
      dispatch(setExpert([]));
    }
  } catch (err) {
    alert(err);
  }
};
