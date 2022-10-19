import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import NewsReducer from "./redux/NewsReducer/news.reducer";
import GalleryReducer from "./redux/GalleryReducer/gallery.reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const reducer = combineReducers({
  NewsReducer,
  GalleryReducer,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
