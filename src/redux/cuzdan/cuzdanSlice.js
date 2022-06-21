import { createSlice } from "@reduxjs/toolkit";

export const cuzdanSlice = createSlice({
  name: "cuzdan",
  initialState: {
    money: 10000000000,
    basket: [],
    total: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      const varMi = state.basket.find((item) => item.id === action.payload.id);
      // console.log(varMi);
      if (!varMi) {
        state.basket.push(action.payload);
        state.total += action.payload.quantity * action.payload.price; 
        state.money = state.money -(action.payload.quantity * action.payload.price);
      } else {
        varMi.quantity += 1;
        state.total += varMi.price;
        state.money = state.money - varMi.price;
      }
    },
    dropToBasket: (state, action) => {
      const varMi = state.basket.find((item) => item.id === action.payload.id);
      // console.log(varMi);
      if (varMi.quantity<=1) {
        const filtered = state.basket.filter((item) => item.id !== varMi.id);
        state.total -= varMi.price;
        state.money = state.money + varMi.price;
        state.basket = filtered;
      } else {
        varMi.quantity -= 1;
        state.total -= varMi.price;
        state.money = state.money + varMi.price;
      }
    },
  },
});

export const { addToBasket,dropToBasket } = cuzdanSlice.actions;
export default cuzdanSlice.reducer;
