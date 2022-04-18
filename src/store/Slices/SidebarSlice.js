import { createSlice } from "@reduxjs/toolkit";

const initialSidebarState = {
    current: "products"
}
const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: initialSidebarState,
    reducers: {
        goProductsPage(state) {
            state.current = "products";
        },
        goOrdersPage(state) {
            state.current = "orders";
        }
    }
})

export default sidebarSlice;