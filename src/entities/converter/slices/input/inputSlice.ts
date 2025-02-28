import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    inputValue: 0,
    inputCurrency: localStorage.getItem("currency") || "USD",
    resultValue: 0,
    resultCurrency: localStorage.getItem("currencyResult") || "USD",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setCurrency: (state, action) => {
      state.inputCurrency = action.payload;
    },
    setResultValue: (state, action) => {
      state.resultValue = +(action.payload * state.inputValue).toFixed(3);
    },
    setResultCurrency: (state, action) => {
      state.resultCurrency = action.payload;
    },
  },
});

export const { setInputValue, setCurrency, setResultValue, setResultCurrency } =
  inputSlice.actions;

export default inputSlice.reducer;
