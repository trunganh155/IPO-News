import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import NewsReducer from "./redux/NewsReducer/news.reducer";
import GalleryReducer from "./redux/GalleryReducer/gallery.reducer";
import ExpertReducer from "./redux/ExpertReducer/expert.reducer";
import AccountReducer from "./redux/AccountReducer/account.reducer";

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const reducer = combineReducers({
	NewsReducer,
	GalleryReducer,
	ExpertReducer,
	AccountReducer,
});

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);
