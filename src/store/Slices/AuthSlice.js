import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    user: {
        email: "honguyen@miu.edu",
        role: "Seller"
    }
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        loginSuccessfully(state, payload) {
            state.isAuthenticated = true;
            // state.user = payload
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

export default authSlice;