import thuongApi from "../TestReducer copy/test.api";
import thuongApi from "./thuong.api";
import { setHoa } from "./thuong.reducer";

export const getHoa = () => async (dispatch) => {
  try {
    const resApi = await thuongApi.getHoa();
    if (resApi.success) {
      dispatch(setHoa(resApi?.data));
    } else {
      dispatch(setHoa([]));
    }
  } catch (err) {
    alert(err);
  }
};
