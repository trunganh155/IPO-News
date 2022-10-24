import callApi from "../../utils/callApi";
import { Buffer } from "buffer";
import {
	getTokenUser,
	getDetailUser,
	registerUser,
} from "../reducers/user.reducers";

export const getTokenUserAction = (username, password) => {
	var credentials = Buffer.from(username + ":" + password).toString("base64");
	var basicAuth = "Basic " + credentials;
	const add = async (dispatch) => {
		try {
			const res = await callApi(
				`auth/local?group_id=60939745ac969b40784883ed&id_app=62de1bd5fcc56b09934ee278`,
				"GET",
				"",
				{
					Authorization: basicAuth,
				}
			);
			if (res.data) {
				await dispatch(getTokenUser(res.data.token));
				const detailUser = await callApi(
					`api/profile?access_token=${res.data.token}`,
					"GET"
				);
				await dispatch(getDetailUser(detailUser.data));
				return res.data;
			} else {
				await dispatch(getTokenUser(res));
				return res;
			}
		} catch (err) {
			// console.log(err);
		}
	};
	return add;
};

export const saveTokenToReduxAction = (token) => {
	const add = async (dispatch) => {
		try {
			await dispatch(getTokenUser(token));
		} catch (err) {
			// console.log("true");
		}
	};
	return add;
};

export const getDetailUserAction = (token) => {
	const add = async (dispatch) => {
		try {
			const res = await callApi(
				`api/profile?access_token=${token}`,
				"GET"
			);
			if (res.data) {
				await dispatch(getDetailUser(res.data));
			}
			return res;
		} catch (err) {
			// console.log("true");
		}
	};
	return add;
};

export const registerUserAction = (data) => {
	const add = async (dispatch) => {
		try {
			const res = await callApi(`signup`, "POST", data);
			await dispatch(registerUser(res));
			return res.data;
		} catch (err) {
			// console.log("true");
		}
	};
	return add;
};
