"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  // status: false,
  list: [],
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      // state.status = true
      state.list = action.payload
    },
  },
})

export const { updateProducts } = productsSlice.actions

export default productsSlice.reducer
