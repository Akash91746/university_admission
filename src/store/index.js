import { combineReducers, configureStore } from "@reduxjs/toolkit";
import applicantSlice from "./applicant-slice";
import courseSlice from "./courses-slice";

const rootReducer = combineReducers({
    courses: courseSlice.reducer,
    applicants: applicantSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;