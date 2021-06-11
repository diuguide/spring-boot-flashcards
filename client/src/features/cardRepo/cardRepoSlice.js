import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    cards: [],
    side: false
};

export const cardRepoSlice = createSlice({
  name: "cardRepo",
  initialState,
    reducers: {
        isLoading: (state) => {
            state.isLoading = true;
        },
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
        flipCard: (state) => {
            state.side = !state.side;
        }
  },
  
});

export const { isLoading, addCard, flipCard } = cardRepoSlice.actions;

export const cardRepoState = (state) => cardRepoSlice.state;

export default cardRepoSlice.reducer;
