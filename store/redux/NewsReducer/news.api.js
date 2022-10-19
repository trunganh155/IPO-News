import clientAxios from "../../../clientAxios";

const getNews = async () => {
  try {
    const resApi = await clientAxios.get(
      `/experts?access_token=${process.env.ACCESS_TOKEN}`
    );
    if (resApi)
      return {
        success: true,
        data: resApi,
      };
    return {
      success: false,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: null,
    };
  }
};

const newsApi = {
  getNews,
};

export default newsApi;
