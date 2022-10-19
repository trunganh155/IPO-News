import clientAxios from "../../../clientAxios";

const getGallery = async () => {
  try {
    const resApi = await clientAxios.get(
      `/gallery?access_token=${process.env.ACCESS_TOKEN}`
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

const galleryApi = {
  getGallery,
};

export default galleryApi;
