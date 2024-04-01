import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models";
import { userSlice } from "./states/user";

export interface AppStore {
    user: UserInfo;
    // manager: Manager
}

export default configureStore<AppStore> ({
    reducer: {
        user: userSlice.reducer
        // manager: managerSlice.reducer -: asi es como escala una app con los redux
    } 
});