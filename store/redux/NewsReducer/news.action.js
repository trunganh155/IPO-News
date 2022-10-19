import newsApi from "./news.api";
import { setNews } from "./news.reducer";

export const getNews = () => async (dispatch) => {
  try {
    const resApi = await newsApi.getNews();
    if (resApi.success) {
      dispatch(setNews(resApi?.data));
    } else {
      dispatch(setNews([]));
    }
  } catch (err) {
    alert(err);
  }
};
