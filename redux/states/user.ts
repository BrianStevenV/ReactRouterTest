import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { clearLocalStorageUser, persistLocalStorageUser } from "../../utilities/localStorage.utility";

export const EmptyUserState: UserInfo = {
    id: 0,
    name: "",
    email: ""

}

export const UserKey = 'user';

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorageUser<UserInfo>(UserKey, action.payload);
            return action.payload
        },

        updateUser: (state, action) => {
            const result = { ...state, ...action.payload};
            persistLocalStorageUser<UserInfo>(UserKey, result);
            return result; 
        }, //Metemos lo que hay en state y ademas metemos lo que viene en el payload, Ent si viene una propiedad que ya este en el
                                                  //State, esta se va actualizar en el nuevo valor
        resertUser: () => {
            clearLocalStorageUser(UserKey);
            return EmptyUserState;
        }
    }
})

export const { createUser, updateUser, resertUser } = userSlice.actions;

export default userSlice.reducer;