"use client"

import { configureStore } from "@reduxjs/toolkit"
import appointmentReducer from "./slices/appointment/pendingAppointmentReducer"

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
  },
})
