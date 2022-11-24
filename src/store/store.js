import { configureStore } from "@reduxjs/toolkit";
import { compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { userReducer } from "./features/user.reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export default configureStore({
    reducer: {
        user: userReducer,
    },
    composedEnhancers,
});