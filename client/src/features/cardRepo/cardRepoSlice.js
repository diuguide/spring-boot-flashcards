import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cards: [],
  side: true,
  count: 0,
  msg: "",
  status: false,
  showAddCard: false,
};

export const cardRepoSlice = createSlice({
  name: "cardRepo",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    isLoaded: (state) => {
      state.isLoading = false;
    },
    startLearning: (state) => {
      state.status = true;
      state.showAddCard = false;
    },
    showAddCard: (state) => {
      state.showAddCard = true;
      state.status = false;
    },
    addCard: (state, action) => {
      state.cards = [];
      let data = action.payload.data;
      data.forEach((card) => state.cards.push(card));
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
    },
  },
});

export const {
  isLoading,
  addCard,
  flipCard,
  nextCard,
  prevCard,
  resetCount,
  sendMessage,
  startLearning,
  showAddCard,
  isLoaded,
} = cardRepoSlice.actions;

export const cardRepoState = (state) => state.cardRepo;

export default cardRepoSlice.reducer;
