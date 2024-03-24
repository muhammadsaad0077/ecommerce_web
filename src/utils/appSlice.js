import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isCardOpen: true,
    },
    reducers: {
        cardOpen: (state) => {
            state.isCardOpen = true; // Corrected from state.isPageOpen to state.isCardOpen
        }
    }
});

export default appSlice.reducer;
export const { cardOpen } = appSlice.actions;
