import clientAxios from "../../../clientAxios";

const getHoa = async () => {
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

const thuongApi = {
  getHoa,
};

export default thuongApi;
