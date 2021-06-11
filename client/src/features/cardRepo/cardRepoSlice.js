import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    cards: [],
    side: true,
    count: 0,
    msg:""
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
        },
        prevCard: (state) => {
            state.count = state.count - 1;
            state.side = true;
        },
        nextCard: (state) => {
            state.count = state.count + 1;
            state.side = true;
        },
        resetCount: (state) => {
            state.count = 0;
        },
        sendMessage: (state, action) => {
            state.msg = action.payload.msg;
        }
  },
  
});

export const { isLoading, addCard, flipCard, nextCard, prevCard, resetCount, sendMessage } = cardRepoSlice.actions;

export const cardRepoState = (state) => state.cardRepo;

export default cardRepoSlice.reducer;
