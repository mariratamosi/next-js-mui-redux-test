"use client"

import { configureStore } from "@reduxjs/toolkit"
import appointmentReducer from "./slices/appointment/pendingAppointmentReducer"
import productsReducer from "./slices/products"

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    products: productsReducer,
  },
})
