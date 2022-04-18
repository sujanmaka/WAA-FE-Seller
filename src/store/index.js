import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/AuthSlice";
import sidebarSlice from "./Slices/SidebarSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        sidebar: sidebarSlice.reducer
    }
})

export const authActions = authSlice.actions;
export const sidebarActions = sidebarSlice.actions;
export default store;